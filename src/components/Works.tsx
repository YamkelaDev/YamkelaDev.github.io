import { useState } from "react";
import ComputerFrameCanvas from "./canvas/ComputerFrame";
import useReveal from "../hooks/useReveal";
import { projects } from "../data";

const ProjectScreen = ({ index }: { index: number }) => {
  const p = projects[index];
  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      className="flex h-full w-full flex-col justify-between bg-dark-2 p-7 text-left no-underline"
    >
      <div>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 px-2.5 py-0.5 text-[9px] uppercase tracking-wide text-white/50"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-display text-[22px] font-bold leading-tight text-white">
          {p.name}
        </h3>
        <p className="mt-2.5 text-[12.5px] leading-[1.65] text-white/55">{p.description}</p>
      </div>
      <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-gold">
        {p.linkLabel} ↗
      </div>
    </a>
  );
};

const Works = () => {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);

  const go = (dir: 1 | -1) =>
    setActive((v) => (v + dir + projects.length) % projects.length);

  return (
    <section id="projects" className="px-6 py-28 sm:px-14 lg:py-36">
      <div className="mx-auto max-w-[1240px]">
        <div ref={ref} className="reveal mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3.5 flex items-center gap-3 text-[10px] uppercase tracking-[6px] text-gold">
              Portfolio
            </div>
            <h2 className="font-display text-[32px] font-bold leading-[1.12] text-white sm:text-[46px]">
              Work from <em className="italic text-gold">the field</em>
            </h2>
          </div>
          <a
            href="https://github.com/YamkelaDev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[12px] uppercase tracking-[2px] text-gold hover:gap-3.5"
          >
            All Repositories ↗
          </a>
        </div>

        {/* 3D computer showcase */}
        <div className="relative mb-6 h-[380px] rounded-2xl border border-white/[0.07] bg-dark-3 sm:h-[460px]">
          <ComputerFrameCanvas>
            <ProjectScreen index={active} />
          </ComputerFrameCanvas>
        </div>

        <div className="mb-16 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold/50 hover:text-gold"
          >
            ←
          </button>
          <div className="flex gap-2">
            {projects.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                aria-label={`Show ${p.name}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-gold" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold/50 hover:text-gold"
          >
            →
          </button>
        </div>

        {/* full project list */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {projects.map((p, i) => (
            <button
              key={p.name}
              onClick={() => {
                setActive(i);
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`rounded-xl border p-5 text-left transition-colors ${
                i === active
                  ? "border-gold/40 bg-gold/[0.05]"
                  : "border-white/[0.07] bg-dark-3 hover:border-gold/25"
              }`}
            >
              <div className="mb-2 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] uppercase tracking-wide text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="text-[15px] font-semibold text-white">{p.name}</div>
              <p className="mt-1.5 line-clamp-2 text-[12.5px] leading-[1.6] text-white/50">
                {p.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
