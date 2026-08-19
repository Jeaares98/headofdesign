"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, BrainCircuit, Check, ChevronDown, Figma, Gauge, Link2, Paperclip, Plus, Search, Sparkles, WandSparkles } from "lucide-react";

const projects = ["CEAMS", "Creator Suite", "Salto Führerschein", "Colortreat Lab"];
const modes = ["Research", "Design", "Critique", "Build"] as const;

const recent = [
  { title: "Improve CEAMS onboarding", project: "CEAMS", status: "Ready", score: 8.9 },
  { title: "Community dashboard critique", project: "Creator Suite", status: "Reviewed", score: 8.4 },
  { title: "Salto booking flow direction", project: "Salto Führerschein", status: "Draft", score: 7.8 },
];

export default function Home() {
  const [project, setProject] = useState(projects[0]);
  const [mode, setMode] = useState<(typeof modes)[number]>("Design");
  const [task, setTask] = useState("");
  const [reference, setReference] = useState("");
  const canRun = task.trim().length > 3;

  const brief = useMemo(() => ({ project, mode, task, reference }), [project, mode, task, reference]);

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
        <div className="sidebarBottom">
          <div className="avatar">JL</div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">HEAD OF DESIGN / CONSOLE</p>
            <h1>What should we make better?</h1>
          </div>
          <div className="status"><span className="statusDot" /> Agent online</div>
        </header>

        <div className="grid">
          <section className="composer card">
            <div className="composerTop">
              <label className="selectWrap">
                <span>PROJECT</span>
                <div className="selectControl">
                  <select value={project} onChange={(e) => setProject(e.target.value)}>
                    {projects.map((item) => <option key={item}>{item}</option>)}
                  </select>
                  <ChevronDown size={15} />
                </div>
              </label>
              <div className="modeSet">
                {modes.map((item) => (
                  <button key={item} onClick={() => setMode(item)} className={mode === item ? "mode active" : "mode"}>{item}</button>
                ))}
              </div>
            </div>

            <textarea
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Describe the challenge, not the solution. Example: Make CEAMS onboarding feel clearer, more premium and less like a finance app."
              aria-label="Design task"
            />

            <div className="referenceRow">
              <Link2 size={16} />
              <input value={reference} onChange={(e) => setReference(e.target.value)} placeholder="Paste Figma, website or reference URL" />
              <button className="attach" aria-label="Attach screenshot"><Paperclip size={16} /></button>
            </div>

            <div className="composerFooter">
              <div className="signals">
                <span><Check size={13} /> Research first</span>
                <span><Check size={13} /> Use design memory</span>
                <span><Check size={13} /> Run visual QA</span>
              </div>
              <button className="run" disabled={!canRun} onClick={() => console.info("Head of Design brief", brief)}>
                Run Head of Design <WandSparkles size={17} />
              </button>
            </div>
          </section>

          <aside className="intelligence card">
            <div className="sectionTitle">
              <div><span className="miniIcon"><Sparkles size={15} /></span><strong>Design intelligence</strong></div>
              <button>View all <ArrowUpRight size={14} /></button>
            </div>
            <div className="intelItem">
              <span className="intelIndex">01</span>
              <div><strong>Progressive mastery</strong><p>Borrow game progression without turning serious products into games.</p></div>
            </div>
            <div className="intelItem">
              <span className="intelIndex">02</span>
              <div><strong>One obvious next move</strong><p>Reduce choice at high-friction moments and reveal complexity later.</p></div>
            </div>
            <div className="intelItem">
              <span className="intelIndex">03</span>
              <div><strong>Emotion as feedback</strong><p>Use motion and micro-feedback to make progress feel tangible.</p></div>
            </div>
            <div className="sourceStrip"><Figma size={15} /> Figma connected <span>•</span> 24 patterns indexed</div>
          </aside>
        </div>

        <section className="recentSection">
          <div className="sectionHeading"><div><p className="eyebrow">RECENT WORK</p><h2>Design runs</h2></div><button className="ghost">Open archive</button></div>
          <div className="runs">
            {recent.map((item) => (
              <article className="runCard" key={item.title}>
                <div className="runTop"><span>{item.project}</span><span className={`pill ${item.status.toLowerCase()}`}>{item.status}</span></div>
                <h3>{item.title}</h3>
                <div className="runBottom"><span>Design score</span><strong>{item.score}</strong></div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
