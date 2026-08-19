"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, BrainCircuit, Check, ChevronDown, Figma, Gauge, Link2, Loader2, Paperclip, Plus, Search, Sparkles, WandSparkles } from "lucide-react";

const projects = ["CEAMS", "Creator Suite", "Salto Führerschein", "Colortreat Lab"];
const modes = ["Research", "Design", "Critique", "Build"] as const;

type RunResult = {
  summary: string;
  direction: string;
  mechanisms: Array<{ name: string; why: string; application: string }>;
  actions: string[];
  score: Record<string, number> & { overall: number };
  nextStep: string;
  source: "openai" | "demo";
};

export default function Home() {
  const [project, setProject] = useState(projects[0]);
  const [mode, setMode] = useState<(typeof modes)[number]>("Design");
  const [task, setTask] = useState("");
  const [reference, setReference] = useState("");
  const [result, setResult] = useState<RunResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const canRun = task.trim().length > 3 && !loading;

  const brief = useMemo(() => ({ project, mode, task, reference }), [project, mode, task, reference]);

  async function runHeadOfDesign() {
    if (!canRun) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const response = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(brief),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Run failed");
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Run failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brandmark"><span>H</span></div>
        <div className="sidegroup">
          <button className="iconButton active" aria-label="New task"><Plus size={19} /></button>
          <button className="iconButton" aria-label="Search"><Search size={18} /></button>
          <button className="iconButton" aria-label="Intelligence"><BrainCircuit size={18} /></button>
          <button className="iconButton" aria-label="Quality"><Gauge size={18} /></button>
        </div>
        <div className="sidebarBottom"><div className="avatar">JL</div></div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div><p className="eyebrow">HEAD OF DESIGN / CONSOLE</p><h1>What should we make better?</h1></div>
          <div className="status"><span className="statusDot" /> Agent online</div>
        </header>

        <div className="grid">
          <section className="composer card">
            <div className="composerTop">
              <label className="selectWrap">
                <span>PROJECT</span>
                <div className="selectControl">
                  <select value={project} onChange={(e) => setProject(e.target.value)}>{projects.map((item) => <option key={item}>{item}</option>)}</select>
                  <ChevronDown size={15} />
                </div>
              </label>
              <div className="modeSet">{modes.map((item) => <button key={item} onClick={() => setMode(item)} className={mode === item ? "mode active" : "mode"}>{item}</button>)}</div>
            </div>

            <textarea value={task} onChange={(e) => setTask(e.target.value)} placeholder="Describe the challenge, not the solution. Example: Make CEAMS onboarding feel clearer, more premium and less like a finance app." aria-label="Design task" />

            <div className="referenceRow"><Link2 size={16} /><input value={reference} onChange={(e) => setReference(e.target.value)} placeholder="Paste Figma, website or reference URL" /><button className="attach" aria-label="Attach screenshot"><Paperclip size={16} /></button></div>

            <div className="composerFooter">
              <div className="signals"><span><Check size={13} /> Research first</span><span><Check size={13} /> Use design memory</span><span><Check size={13} /> Run visual QA</span></div>
              <button className="run" disabled={!canRun} onClick={runHeadOfDesign}>{loading ? <><Loader2 className="spin" size={17} /> Running…</> : <>Run Head of Design <WandSparkles size={17} /></>}</button>
            </div>
            {error && <div className="errorBox">{error}</div>}
          </section>

          <aside className="intelligence card">
            <div className="sectionTitle"><div><span className="miniIcon"><Sparkles size={15} /></span><strong>Design intelligence</strong></div><button>View all <ArrowUpRight size={14} /></button></div>
            <div className="intelItem"><span className="intelIndex">01</span><div><strong>Progressive mastery</strong><p>Borrow game progression without turning serious products into games.</p></div></div>
            <div className="intelItem"><span className="intelIndex">02</span><div><strong>One obvious next move</strong><p>Reduce choice at high-friction moments and reveal complexity later.</p></div></div>
            <div className="intelItem"><span className="intelIndex">03</span><div><strong>Emotion as feedback</strong><p>Use motion and micro-feedback to make progress feel tangible.</p></div></div>
            <div className="sourceStrip"><Figma size={15} /> Figma connected <span>•</span> Agent runtime ready</div>
          </aside>
        </div>

        {result && (
          <section className="resultSection">
            <div className="resultHero card">
              <div className="resultMeta"><span>{project}</span><span>{mode}</span><span>{result.source === "openai" ? "Live AI" : "Demo mode"}</span></div>
              <div className="scoreRing"><strong>{result.score.overall.toFixed(1)}</strong><span>Design score</span></div>
              <div><p className="eyebrow">HEAD OF DESIGN DIRECTION</p><h2>{result.summary}</h2><p className="directionText">{result.direction}</p></div>
            </div>

            <div className="resultGrid">
              <article className="card resultCard"><p className="eyebrow">MECHANISMS</p>{result.mechanisms.map((item, i) => <div className="mechanism" key={item.name}><span>0{i + 1}</span><div><strong>{item.name}</strong><p>{item.why}</p><em>{item.application}</em></div></div>)}</article>
              <article className="card resultCard"><p className="eyebrow">NEXT ACTIONS</p><ol>{result.actions.map((item) => <li key={item}>{item}</li>)}</ol><div className="nextStep"><span>Next step</span><strong>{result.nextStep}</strong></div></article>
              <article className="card resultCard scoreCard"><p className="eyebrow">QUALITY GATE</p>{Object.entries(result.score).filter(([key]) => key !== "overall").map(([key, value]) => <div className="scoreRow" key={key}><span>{key}</span><div className="scoreBar"><i style={{ width: `${Math.min(100, value * 10)}%` }} /></div><strong>{value.toFixed(1)}</strong></div>)}</article>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
