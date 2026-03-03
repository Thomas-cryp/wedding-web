import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Úvod", href: "#intro" },
  { label: "Program", href: "#program" },
  { label: "Q&A", href: "#qa" },
  { label: "Dress code", href: "#dresscode" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-0 border-none bg-transparent shadow-none">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-3xl font-bold text-white no-underline drop-shadow-md transition-colors hover:text-accent"
        >
          Vali &amp; Tomáš
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href} className="list-none">
              <a
                href={l.href}
                className="text-lg font-semibold uppercase tracking-wide text-white no-underline drop-shadow-md transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden border-none bg-transparent p-1 text-white drop-shadow-md"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-10 bg-bg/95 backdrop-blur-md md:hidden">
          <button
            className="absolute top-5 right-6 bg-transparent border-none p-1 text-dark"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleClick}
              className="text-2xl font-bold uppercase tracking-wide text-dark no-underline hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
