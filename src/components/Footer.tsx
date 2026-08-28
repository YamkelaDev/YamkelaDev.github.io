import { person } from "../data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-dark-2 px-6 py-8 sm:px-14">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="text-[12px] text-white/30">
          © {year} {person.name} · {person.alias} · {person.location}
        </span>
        <div className="flex gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        </div>
        <span className="text-[12px] text-white/30">
          Built with ❤️ ·{" "}
          <a href={person.github} target="_blank" rel="noreferrer" className="text-gold no-underline">
            GitHub ↗
          </a>
        </span>
      </div>
      <p className="mx-auto mt-5 max-w-[1240px] text-center text-[10.5px] leading-relaxed text-white/20 sm:text-left">
        3D models: "Gaming Desktop PC" by{" "}
        <a
          href="https://sketchfab.com/Yolala1232"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-white/20 hover:text-white/40"
        >
          Yolala1232
        </a>{" "}
        and "Stylized Planet" by{" "}
        <a
          href="https://sketchfab.com/cmzw"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-white/20 hover:text-white/40"
        >
          cmzw
        </a>
        , both licensed{" "}
        <a
          href="http://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-white/20 hover:text-white/40"
        >
          CC BY 4.0
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
