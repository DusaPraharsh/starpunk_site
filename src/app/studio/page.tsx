import Link from "next/link";
import { Footer, Header, Arrow } from "../_components";

const team = [
  ["Maya Chen", "Creative Director", "maya", "MC"],
  ["Noah Williams", "Game Director", "noah", "NW"],
  ["Aisha Rahman", "Art Director", "aisha", "AR"],
  ["Leo Martinez", "Technical Director", "leo", "LM"],
  ["Sofia Petrov", "Production Director", "sofia", "SP"],
  ["Ben Okafor", "Audio Director", "ben", "BO"],
];

export default function Studio(){return <main><Header/>
  <section className="page-hero wrap"><p className="eyebrow"><span/> The studio</p><h1>Curiosity is<br/>our <em>compass.</em></h1><p className="lede">Starpunk is a small, independently owned game studio on a mission to fill the world with more playful places.</p></section>
  <section className="statement"><div className="wrap"><p>We bring bold ideas down to earth with care, craft, and a lot of conversations around the whiteboard.</p><div className="stats"><div><strong>2018</strong><span>Founded</span></div><div><strong>17</strong><span>Humans</span></div><div><strong>4</strong><span>Countries</span></div></div></div></section>
  <section className="team wrap"><div className="team-heading"><div><p className="eyebrow"><span/> The people</p><h2>Meet the<br/><em>Starpunks.</em></h2></div><p>Different disciplines, shared orbit. A small team with an outsized love of play.</p></div><div className="team-grid">{team.map(([name,role,art,initials])=><article className="team-member" key={name}><div className={`portrait portrait-${art}`}><span>{initials}</span><i/><b/></div><h3>{name}</h3><p>{role}</p></article>)}</div></section>
  <section className="values wrap"><p className="eyebrow"><span/> Our principles</p><div className="value-grid"><article><b>01</b><h2>Play is serious business.</h2><p>We keep it joyful, even when the work gets hard.</p></article><article><b>02</b><h2>Find the human thing.</h2><p>Every mechanic should make a real feeling possible.</p></article><article><b>03</b><h2>Leave room for wonder.</h2><p>The best parts are sometimes the ones you didn&apos;t plan.</p></article></div></section>
  <section className="join compact"><div className="wrap join-inner"><div className="roundel">✦</div><div><p className="eyebrow"><span/> Partner with us</p><h2>Build the next<br/>great <em>world.</em></h2><Link href="/investors" className="button button-primary">Investor overview <Arrow/></Link></div></div></section><Footer/></main>}
