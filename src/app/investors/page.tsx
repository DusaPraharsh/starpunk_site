import { Footer, Header, Arrow } from "../_components";

const reasons = [
  ["01", "A clear creative point of view", "We make distinctive, player-first worlds that earn attention in an increasingly noisy market."],
  ["02", "A focused, proven team", "A senior cross-disciplinary team with the discipline to deliver ambitious experiences at independent scale."],
  ["03", "Ideas built to grow", "Our worlds are designed to welcome communities, create enduring IP, and open new paths beyond the first release."],
];

export default function Investors() {
  return <main><Header/>
    <section className="page-hero wrap investors-hero"><p className="eyebrow"><span/> Investment</p><h1>Invest in worlds<br/>with <em>staying power.</em></h1><p className="lede">Starpunk combines the creative clarity of an independent studio with the practical focus needed to build durable, globally loved game franchises.</p></section>
    <section className="perks investor-band"><div className="wrap perks-grid"><div><p className="eyebrow light"><span/> The opportunity</p><h2>Small studio.<br/>Expansive future.</h2></div><div className="perk-list"><p><b>01</b> Original IP with a recognizable point of view</p><p><b>02</b> Premium games made for long-term player affinity</p><p><b>03</b> Lean teams, deliberate production, measured growth</p><p><b>04</b> A partner-ready roadmap built for the next chapter</p></div></div></section>
    <section className="values wrap investor-reasons"><p className="eyebrow"><span/> Why Starpunk</p><div className="value-grid">{reasons.map(([number,title,body])=><article key={number}><b>{number}</b><h2>{title}</h2><p>{body}</p></article>)}</div></section>
    <section className="investor-contact"><div className="wrap"><p className="eyebrow"><span/> Start a conversation</p><h2>Let&apos;s make the next<br/>favorite <em>place.</em></h2><p>We welcome thoughtful conversations with investors and strategic partners who share our long view.</p><a className="button button-primary" href="mailto:partners@starpunk.studio">Request our investor deck <Arrow/></a></div></section>
  <Footer/></main>;
}
