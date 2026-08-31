import ComputersCanvas from "./canvas/Computers";
import useReveal from "../hooks/useReveal";
import { person, stats } from "../data";

const Hero = () => {
  const welcomeRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* full-screen 3D landing — the first thing you see */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <ComputersCanvas />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark/70 via-transparent to-dark" />

        <div className="pointer-events-none absolute left-6 top-28 sm:left-14 sm:top-32">
          <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[5px] text-accent">
            <span className="h-px w-8 bg-accent" />
            {person.role}
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-[3px] text-white/40">
            {person.location}
          </div>
        </div>

        <p className="pointer-events-none absolute bottom-24 left-1/2 -translate-x-1/2 text-center text-[10px] uppercase tracking-[2px] text-white/30 sm:bottom-28">
          move your mouse
        </p>

        <a
          href="#welcome"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-accent"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-[4px]">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
        </a>
      </section>

      {/* welcome / intro copy — revealed once you scroll past the 3D scene */}
      <section id="welcome" className="relative px-6 pb-6 pt-24 sm:px-14 sm:pt-32">
        <div ref={welcomeRef} className="reveal mx-auto max-w-3xl text-center">
          <h1 className="font-display text-[36px] font-bold leading-[1.08] text-white sm:text-[54px] lg:text-[64px]">
            Welcome, I'm
            <span className="block text-gradient-accent">
              Yamkela Magayiyana
            </span>
            <span className="mt-1 block text-[0.5em] font-normal italic text-white/85">
              — aka {person.alias}
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.75] text-white/60">
            A <strong className="font-medium text-white/90">Chief Information Officer, founder and full-stack developer</strong> —
            building digital tools that bridge agriculture, health advocacy and
            technology, from mobile field reporting systems to the very site
            you're looking at.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-[13px] font-bold tracking-wide text-black transition-all hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_8px_30px_rgba(145,94,255,0.4)]"
            >
              View My Work
            </a>
            <a
              href={person.googlePlay}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-[13px] font-bold tracking-wide text-black transition-all hover:-translate-y-0.5 hover:bg-accent-light"
            >
              📱 Download Chilli Grower App
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-[13px] font-semibold tracking-wide text-white/80 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              GitHub Profile →
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-16 grid max-w-[1160px] grid-cols-2 rounded-2xl border border-white/[0.07] bg-dark-3/60 backdrop-blur-md sm:grid-cols-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-white/[0.07] px-6 py-5 sm:border-r sm:last:border-r-0 ${
                i % 2 === 0 ? "border-r" : ""
              }`}
            >
              <div className="text-[26px] font-bold leading-none text-accent">{s.value}</div>
              <div className="mt-1.5 text-[11px] tracking-wide text-white/55">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
