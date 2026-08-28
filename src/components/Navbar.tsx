import { useEffect, useState } from "react";
import { navLinks, person } from "../data";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-6 py-4 transition-colors duration-300 sm:px-14 ${
          scrolled ? "bg-dark/90 backdrop-blur-md border-b border-white/[0.07]" : ""
        }`}
      >
        <a href="#hero" className="text-[13px] font-bold uppercase tracking-[3px] text-gold">
          {person.alias}
        </a>

        <ul className="hidden gap-9 sm:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-[12px] uppercase tracking-[1.5px] text-white/50 transition-colors hover:text-gold"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={person.github}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-md border border-gold/40 px-5 py-2 text-[12px] uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-black sm:inline-block"
        >
          GitHub ↗
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobileMenu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 sm:hidden"
        >
          <img src={open ? closeIcon : menuIcon} alt="" className="h-4 w-4" />
        </button>
      </nav>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[198] bg-black/50 transition-opacity duration-300 sm:hidden ${
          open ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        id="mobileMenu"
        className={`fixed right-0 top-0 z-[199] flex h-screen w-[78vw] max-w-[320px] flex-col gap-7 border-l border-white/[0.07] bg-dark/95 px-8 pb-10 pt-24 backdrop-blur-md transition-transform duration-300 sm:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setOpen(false)}
            className="text-[15px] uppercase tracking-wide text-white/70 hover:text-gold"
          >
            {link.title}
          </a>
        ))}
        <a
          href={person.github}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block rounded-md border border-gold/40 px-5 py-2 text-center text-[12px] uppercase tracking-wide text-gold"
        >
          GitHub ↗
        </a>
      </nav>
    </>
  );
};

export default Navbar;
