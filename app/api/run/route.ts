import OpenAI from "openai";

type RunRequest = {
  project?: string;
  mode?: "Research" | "Design" | "Critique" | "Build";
  task?: string;
  reference?: string;
};

type DesignRun = {
  summary: string;
  direction: string;
  mechanisms: Array<{ name: string; why: string; application: string }>;
  actions: string[];
  score: {
    clarity: number;
    hierarchy: number;
    emotion: number;
    distinctiveness: number;
    usability: number;
    feasibility: number;
    overall: number;
  };
  nextStep: string;
  source: "openai" | "demo";
};

const clamp = (value: number) => Math.max(1, Math.min(10, value));

function demoRun(input: Required<Pick<RunRequest, "project" | "mode" | "task">> & Pick<RunRequest, "reference">): DesignRun {
  const seed = Math.min(9.2, 7.8 + Math.min(input.task.length, 160) / 120);
  return {
    summary: `For ${input.project}, the strongest opportunity is to reduce cognitive load while making the next action feel more intentional and premium.`,
    direction: `${input.mode} direction: lead with one obvious next move, use stronger visual hierarchy, and add meaningful feedback only where it clarifies progress.`,
    mechanisms: [
      {
        name: "One obvious next move",
        why: "People move faster when high-friction screens do not ask them to evaluate many equally weighted options.",
        application: "Make the primary action dominant and progressively reveal secondary choices."
      },
      {
        name: "Progressive mastery",
        why: "Visible progress creates confidence and reduces the feeling of complexity.",
        application: "Break the experience into understandable stages and show what has already been completed."
      },
      {
        name: "Emotion as feedback",
        why: "Subtle motion and state changes make progress tangible without turning the product into a game.",
        application: "Use micro-interactions for completion, confirmation, hierarchy changes and transitions."
      }
    ],
    actions: [
      "Reduce the first screen to one dominant decision.",
      "Create a stronger type and spacing hierarchy before adding decoration.",
      "Add explicit empty, loading, success and error states.",
      input.reference ? `Review the supplied reference (${input.reference}) for mechanisms, not visual copying.` : "Add one relevant Figma or product reference for the next iteration."
    ],
    score: {
      clarity: clamp(seed + 0.2),
      hierarchy: clamp(seed),
      emotion: clamp(seed - 0.4),
      distinctiveness: clamp(seed - 0.2),
      usability: clamp(seed + 0.1),
      feasibility: clamp(seed + 0.4),
      overall: clamp(seed)
    },
    nextStep: "Turn this direction into a concrete screen flow, then run visual QA before developer handoff.",
    source: "demo"
  };
}

function extractJson(text: string) {
  const cleaned = text.trim().replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
  return JSON.parse(cleaned);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RunRequest;
    const project = body.project?.trim() || "Colortreat Lab";
    const mode = body.mode || "Design";
    const task = body.task?.trim() || "";
    const reference = body.reference?.trim() || "";

    if (task.length < 4) {
      return Response.json({ error: "Please describe the design challenge in a little more detail." }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json(demoRun({ project, mode, task, reference }));
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const model = process.env.OPENAI_MODEL || "gpt-5";

    const response = await client.responses.create({
      model,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: `You are a world-class Head of Design combining product design, UX research, visual design, motion, interaction design, behavioral psychology and game UX. Prioritize clarity, hierarchy, usability, emotional impact, distinctiveness, accessibility and technical feasibility. Never copy references literally; extract the mechanism and adapt it. Return ONLY valid JSON with this exact shape: {"summary":string,"direction":string,"mechanisms":[{"name":string,"why":string,"application":string}],"actions":string[],"score":{"clarity":number,"hierarchy":number,"emotion":number,"distinctiveness":number,"usability":number,"feasibility":number,"overall":number},"nextStep":string}. Scores are 1-10. Keep it specific and implementation-oriented.`
            }
          ]
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Project: ${project}\nMode: ${mode}\nChallenge: ${task}\nReference: ${reference || "none"}`
            }
          ]
        }
      ]
    });

    const parsed = extractJson(response.output_text) as Omit<DesignRun, "source">;
    return Response.json({ ...parsed, source: "openai" satisfies DesignRun["source"] });
  } catch (error) {
    console.error("Head of Design run failed", error);
    return Response.json({ error: "The design run failed. Try again or check the server configuration." }, { status: 500 });
  }
}
