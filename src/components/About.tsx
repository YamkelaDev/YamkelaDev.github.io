import PlanetCanvas from "./canvas/Planet";
import useReveal from "../hooks/useReveal";
import { person, skills, credentials, technologies, quote } from "../data";

const About = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="px-6 py-28 sm:px-14 lg:py-36">
      <div className="mx-auto max-w-[1240px]">
        <div ref={ref} className="reveal">
          <div className="mb-3.5 flex items-center gap-3 text-[10px] uppercase tracking-[6px] text-accent">
            Who I am
            <span className="h-px max-w-[60px] flex-1 bg-white/[0.07]" />
          </div>
          <h2 className="font-display text-[32px] font-bold leading-[1.12] text-white sm:text-[46px]">
            Rooted in the field,
            <br />
            building for the <em className="italic text-accent">future</em>
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-5 sm:grid-cols-4">
          {/* bio — large tile */}
          <div className="col-span-1 rounded-2xl border border-white/[0.07] bg-dark-3 p-8 sm:col-span-2 sm:row-span-2 sm:p-10">
            <div className="mb-4 text-[10px] uppercase tracking-[2px] text-accent">Background</div>
            {person.bio.map((p, i) => (
              <p key={i} className="mb-4 text-[15px] leading-[1.85] text-white/60 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          {/* globe */}
          <div className="relative col-span-1 h-[260px] overflow-hidden rounded-2xl border border-white/[0.07] bg-dark-3 sm:col-span-2 sm:h-auto">
            <PlanetCanvas />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-3 via-dark-3/70 to-transparent p-5">
              <div className="text-[10px] uppercase tracking-[2px] text-accent">Based in</div>
              <div className="mt-1 text-[15px] font-medium text-white">
                {person.city}
              </div>
            </div>
          </div>

          {/* foundation / credentials */}
          <div className="col-span-1 rounded-2xl border border-white/[0.07] bg-dark-3 p-7 sm:col-span-2">
            <div className="mb-4 text-[10px] uppercase tracking-[2px] text-accent">Foundation</div>
            <ul className="flex flex-col gap-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 text-[14px] text-white/70">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent2-light" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* skills */}
          <div className="col-span-1 rounded-2xl border border-white/[0.07] bg-dark-3 p-7 sm:col-span-2">
            <div className="mb-4 text-[10px] uppercase tracking-[2px] text-accent">What I work on</div>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-accent/30 bg-accent/[0.06] px-4 py-1.5 text-[12px] tracking-wide text-accent/85"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* tech icons */}
          <div className="col-span-1 rounded-2xl border border-white/[0.07] bg-dark-3 p-7 sm:col-span-2">
            <div className="mb-4 text-[10px] uppercase tracking-[2px] text-accent">Tech stack</div>
            <div className="flex flex-wrap gap-3">
              {technologies.map((t) => (
                <div
                  key={t.name}
                  title={t.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/90 p-2.5 transition-transform hover:-translate-y-1 hover:border-accent/30"
                >
                  <img src={t.icon} alt={t.name} className="h-full w-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* quote */}
          <div className="col-span-1 flex flex-col justify-center rounded-2xl border border-white/[0.07] bg-dark-3 p-8 sm:col-span-4">
            <span className="mb-4 block font-display text-5xl leading-none text-accent/25">"</span>
            <p className="max-w-2xl font-display text-[18px] italic leading-[1.55] text-white/85 sm:text-[20px]">
              {quote.text}
            </p>
            <div className="mt-4 text-[11px] uppercase tracking-[3px] text-accent">{quote.author}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
