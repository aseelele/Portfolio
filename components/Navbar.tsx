import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container navInner">
        <Link href="/" className="brand">
          <span className="dot" />
          <span>Aseel</span>
        </Link>

        <nav className="navLinks">
          <Link className="navLink" href="/about">About</Link>
          <Link className="navLink" href="/projects">Projects</Link>
          <Link className="navLink" href="/resume">Resume</Link>
        </nav>
      </div>
    </header>
  );
}
