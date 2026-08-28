import ComputersCanvas from "./canvas/Computers";
import { person, stats } from "../data";

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-6 px-6 pt-32 sm:px-14 sm:pt-40 lg:flex-row lg:items-center lg:gap-4">
        <div className="max-w-xl lg:flex-1">
          <div className="mb-6 inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[5px] text-gold">
            <span className="h-px w-8 bg-gold" />
            {person.role} · {person.location}
          </div>
          <h1 className="font-display text-[44px] font-bold leading-[1.05] text-white drop-shadow-[0_2px_40px_rgba(0,0,0,0.5)] sm:text-[64px] lg:text-[76px]">
            Welcome, I'm
            <span className="block text-gradient-gold">
              Yamkela
              <br />
              Magayiyana
            </span>
            <span className="mt-1 block text-[0.55em] font-normal italic text-white/85">
              — aka {person.alias}
            </span>
          </h1>
          <p className="mt-7 max-w-md text-[16px] leading-[1.75] text-white/60">
            Building <strong className="font-medium text-white/90">digital tools rooted in the soil</strong> —
            from mobile field reporting systems and agro-logistics platforms to
            farm branding, chili product pages, and everything in between.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-[13px] font-bold tracking-wide text-black transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_8px_30px_rgba(201,151,43,0.35)]"
            >
              View My Work
            </a>
            <a
              href={person.googlePlay}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-[13px] font-bold tracking-wide text-black transition-all hover:-translate-y-0.5 hover:bg-gold-light"
            >
              📱 Download Chilli Grower App
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-[13px] font-semibold tracking-wide text-white/80 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
            >
              GitHub Profile →
            </a>
          </div>
        </div>

        <div className="relative h-[340px] w-full shrink-0 sm:h-[440px] lg:h-[560px] lg:flex-1">
          <ComputersCanvas />
          <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-[10px] uppercase tracking-[2px] text-white/25">
            move your mouse
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid grid-cols-2 border-t border-white/[0.07] bg-dark/85 backdrop-blur-md sm:grid-cols-5">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`border-white/[0.07] px-6 py-5 sm:border-r sm:last:border-r-0 ${
              i % 2 === 0 ? "border-r" : ""
            }`}
          >
            <div className="text-[26px] font-bold leading-none text-gold">{s.value}</div>
            <div className="mt-1.5 text-[11px] tracking-wide text-white/55">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
