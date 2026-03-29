import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/vision", label: "Vision" },
  { href: "/resume", label: "Resume" },
  { href: "/connect", label: "Connect" },
];

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="navInner">
        <Link href="/" className="brand">
          Aseel Mohammed
        </Link>

        <div className="navLinks">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="navLink">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}