import Link from "next/link";
import { Brand, Footer, Header, Arrow } from "./_components";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero">
        <div className="hero-glow" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Independent game studio · Est. 2077</p>
            <h1>Games with a little more <em>spark.</em></h1>
            <p className="lede">We make system driven, player-first experiences where every strange idea gets a chance to become someone&apos;s favorite memory.</p>
            <div className="hero-actions"><Link className="button button-primary" href="/games">Explore our games <Arrow /></Link><Link className="text-link" href="/studio">Meet the studio <Arrow /></Link></div>
          </div>
          <div className="hero-art" aria-label="A surreal planet scene">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="planet"><i /><b /></div><div className="star star-a">✦</div><div className="star star-b">✦</div><div className="comet" />
            <p className="art-label">OUR NEXT ADVENTURE<br/><strong>IN DEVELOPMENT</strong></p>
          </div>
        </div>
      </section>
      <section className="intro wrap">
        <p className="eyebrow"><span /> What we make</p>
        <div className="intro-row"><h2>Big feelings.<br/>Small teams.</h2><p>We aim to craft games that challenge conventions and give players the freedom to engage with worlds that feel alive, responsive, and unforgettable.</p></div>
      </section>
      <section className="game-feature">
        <div className="wrap feature-grid"><div className="feature-art"><div className="sun" /><div className="land land-back"/><div className="land land-front"/><div className="tower"><i /></div><div className="bird">⌁</div></div>
          <div className="feature-copy"><p className="eyebrow light"><span /> Now available</p><p className="game-type">A hand-held adventure</p><h2>Paper<br/><em>Wilds</em></h2><p>Fold a forgotten island back to life in an adventure about tiny discoveries and taking the long way home.</p><Link href="/games" className="button button-light">Discover Paper Wilds <Arrow /></Link></div></div>
      </section>
      <section className="join"><div className="wrap join-inner"><Brand /><div><p className="eyebrow"><span /> Partner with us</p><h2>Back the next<br/>great <em>world.</em></h2><Link href="/investors" className="button button-primary">Investor overview <Arrow /></Link></div></div></section>
      <Footer />
    </main>
  );
}
