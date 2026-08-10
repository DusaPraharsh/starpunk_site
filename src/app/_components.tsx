import Link from "next/link";

export const Arrow = () => <span className="arrow">↗</span>;
export function Brand() { return <Link href="/" className="brand" aria-label="Starpunk Studio home"><span className="brand-mark"><i /><b /></span><span>STARPUNK<br/>STUDIO</span></Link>; }
export function Header() { return <header className="site-header"><div className="wrap nav"><Brand /><nav><Link href="/games">Games</Link><Link href="/studio">Studio</Link><Link href="/investors">Investors</Link></nav><Link href="/investors" className="contact-button">Let&apos;s talk <Arrow /></Link><button className="menu" aria-label="Open menu">☰</button></div></header>; }
export function Footer() { return <footer><div className="wrap footer-top"><Brand /><div><p>Little games. Big universe.</p><a href="mailto:hello@starpunk.studio">hello@starpunk.studio</a></div><div className="social"><a href="#">Instagram</a><a href="#">X / Twitter</a><a href="#">Discord</a></div></div><div className="wrap footer-bottom"><span>© 2025 Starpunk Studio</span><span>Made in the good part of the galaxy</span><span>Privacy · Terms</span></div></footer>; }
