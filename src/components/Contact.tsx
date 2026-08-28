import useReveal from "../hooks/useReveal";
import { person } from "../data";

const links = [
  {
    label: "GitHub",
    value: "github.com/YamkelaDev",
    href: person.github,
    external: true,
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "Google Play",
    value: "Chilli Grower App",
    href: person.googlePlay,
    external: true,
    icon: <span className="text-lg">📱</span>,
  },
  {
    label: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
    external: false,
    icon: <span className="text-lg">✉️</span>,
  },
  {
    label: "Instagram",
    value: "@innoc_entmag",
    href: person.instagram,
    external: true,
    icon: <span className="text-lg">📸</span>,
  },
  {
    label: "Phone / WhatsApp",
    value: person.phoneDisplay,
    href: `tel:${person.phone}`,
    external: false,
    icon: <span className="text-lg">📞</span>,
  },
];

const Contact = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="px-6 py-28 sm:px-14 lg:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[720px]">
        <div className="mb-3.5 flex items-center gap-3 text-[10px] uppercase tracking-[6px] text-gold">
          Get in touch
        </div>
        <h2 className="font-display text-[32px] font-bold leading-[1.12] text-white sm:text-[46px]">
          Let's grow
          <br />
          something <em className="italic text-gold">together</em>
        </h2>
        <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-white/55">
          Whether you need a farm website, a mobile field reporting tool,
          product branding, or a tech collaborator who understands agriculture
          from the ground up — reach out.
        </p>

        <div className="mt-9 flex flex-col gap-3.5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="flex min-w-0 items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-4.5 transition-colors hover:border-gold/30 hover:bg-gold/[0.04]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                {l.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-wide text-white/50">{l.label}</div>
                <div className="mt-0.5 break-words text-[14.5px] font-medium text-white">
                  {l.value}
                </div>
              </div>
              <div className="ml-auto shrink-0 text-white/40">{l.external ? "↗" : "→"}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
