"use client";
import { useState } from "react";
import { ArrowRight, BarChart3, Check, ChevronRight, CircleDot, Clapperboard, LockKeyhole, Megaphone, Radio, Settings2, Sparkles, Trophy, Users, Zap } from "lucide-react";

const lanes = [
  { id:"create", label:"Create", icon:Clapperboard, title:"Hero Reel: Die Mission", detail:"45 Sek. · Hook, Proof, Einladung", meta:"+10 XP", color:"pink" },
  { id:"activate", label:"Activate", icon:Users, title:"5 erste Backflips filmen", detail:"Samstag · Kurs 14:00 Uhr", meta:"+10 XP", color:"yellow" },
  { id:"outreach", label:"Outreach", icon:Megaphone, title:"Hamburger Morgenpost", detail:"Pitch + Journalist Challenge", meta:"+10 XP", color:"blue" },
  { id:"operate", label:"Operate", icon:Settings2, title:"Counter-Vorlage finalisieren", detail:"Owner: JEAAARES · 20 Min.", meta:"+1 XP", color:"violet" },
] as const;
const chapters=["Hamburg spricht","Hamburg macht mit","Own the City","Hamburg vs. Germany","Germany learns","National movement"];

export default function Home(){
  const [activeLane,setActiveLane]=useState("create"); const [completed,setCompleted]=useState<string[]>([]); const [storyOpen,setStoryOpen]=useState(false);
  const done=completed.length, xp=47+done*10;
  const toggleQuest=(id:string)=>setCompleted(items=>items.includes(id)?items.filter(item=>item!==id):[...items,id]);
  return <main className="gameShell">
    <nav className="gameNav" aria-label="Campaign Navigation"><a className="wordmark" href="#top">JEAAARES<span>®</span></a><div className="navCenter"><span className="liveDot"/> CAMPAIGN LIVE</div><a className="adminLink" href="/admin"><BarChart3 size={15}/> ADMIN / BI</a></nav>
    <section className="hero" id="top"><div className="heroNoise"/><header className="chapterHeader"><div><p className="kicker">CHAPTER 01 / LEVEL 01</p><h1>HAMBURG<br/>SPRICHT.</h1></div><div className="xpBadge"><Zap size={18} fill="currentColor"/><span><strong>{xp}</strong> XP</span></div></header>
      <div className="progressBlock"><div className="progressCopy"><span>MISSION PROGRESS</span><strong>47 <small>/ 1.000 BACKFLIPS</small></strong></div><div className="progressRail"><i style={{width:`${4.7+done}%`}}/><b style={{left:`${4.7+done}%`}}/></div><div className="milestones"><span>#1</span><span>#100</span><span>#250</span><span>#500</span><span>#1.000</span></div></div>
      <div className="storyQuestion"><span><CircleDot size={16}/> STORY NOW</span><p>Kann wirklich jede Person<br/>einen Backflip lernen?</p><button onClick={()=>setStoryOpen(!storyOpen)}>{storyOpen?"ENGINE SCHLIESSEN":"STORY ENGINE"}<ArrowRight size={18}/></button></div>
      {storyOpen&&<div className="storyEngine"><span>OBSERVE</span><i/><span>DIAGNOSE</span><i/><strong>SHOW PROOF</strong><i/><span>EXECUTE</span><i/><span>LEARN</span></div>}
    </section>
    <section className="content"><article className="mainQuest"><div className="questIndex">01</div><div className="questBody"><div className="questMeta"><span><Sparkles size={14}/> MAIN QUEST</span><span>2 / 4 READY</span></div><h2>SHIP THE<br/>CAMPAIGN IDENTITY.</h2><p>Mach die Mission in unter 3 Sekunden verständlich — und den nächsten Backflip unmöglich zu übersehen.</p><div className="questActions"><button className="primaryAction" onClick={()=>document.getElementById("lanes")?.scrollIntoView({behavior:"smooth"})}>QUEST STARTEN <ArrowRight size={18}/></button><span>UNLOCKS <strong>LEVEL 02</strong></span></div></div><div className="questStamp"><Trophy size={28}/><span>WIN CONDITION</span><strong>5</strong><small>BACKFLIPS LIVE</small></div></article>
      <section className="lanesSection" id="lanes"><div className="sectionHeading"><div><p className="kicker dark">TODAY / ACTION LANES</p><h2>DEIN NÄCHSTER MOVE.</h2></div><span>{done}/4 DONE</span></div><div className="laneTabs" role="tablist">{lanes.map(lane=><button key={lane.id} role="tab" aria-selected={activeLane===lane.id} onClick={()=>setActiveLane(lane.id)} className={activeLane===lane.id?"active":""}>{lane.label}</button>)}</div><div className="laneGrid">{lanes.map(lane=>{const Icon=lane.icon,isDone=completed.includes(lane.id);return <article key={lane.id} className={`laneCard ${lane.color} ${activeLane===lane.id?"selected":""} ${isDone?"done":""}`} onClick={()=>setActiveLane(lane.id)}><div className="laneTop"><span><Icon size={18}/> {lane.label.toUpperCase()}</span><button aria-label={`${lane.label} erledigt`} onClick={e=>{e.stopPropagation();toggleQuest(lane.id)}}>{isDone?<Check size={18}/>:<ChevronRight size={18}/>}</button></div><div><h3>{lane.title}</h3><p>{lane.detail}</p></div><footer><span>{lane.meta}</span><small>{isDone?"ERLEDIGT":"HEUTE"}</small></footer></article>})}</div></section>
      <section className="nextSection"><article className="nextCard"><span className="cardLabel">NEXT / LEVEL 02</span><div><p>PROOF OF BACKFLIP</p><h2>BEWEISE, DASS ES FUNKTIONIERT.</h2></div><div className="unlockList"><span><Check size={15}/> Hero Story veröffentlicht</span><span className={done>1?"met":""}><Check size={15}/> Counter-System live</span><span><Radio size={15}/> Noch 3 Teilnehmer vorbereiten</span></div></article><article className="lockedCard"><LockKeyhole size={22}/><span className="cardLabel">LOCKED</span><h3>HAMBURG<br/>MACHT MIT.</h3><p>Chapter 02 öffnet sich, sobald Hamburg nicht nur zuschaut, sondern nominiert.</p><button disabled>10 NOMINATIONS NEEDED</button></article></section>
      <section className="worldMap"><div className="sectionHeading"><div><p className="kicker dark">WORLD MAP</p><h2>DER WEG ZU #1.000</h2></div></div><div className="chapterTrack">{chapters.map((chapter,index)=><div className={index===0?"current":""} key={chapter}><span>0{index+1}</span><i>{index===0?<Zap size={14}/>:<LockKeyhole size={12}/>}</i><p>{chapter}</p></div>)}</div></section>
    </section><footer className="footer"><span>JEAAARES® × SALTO FÜHRERSCHEIN</span><span>OBSERVE → DIAGNOSE → SHIP → LEARN → ADVANCE</span></footer>
  </main>
}
