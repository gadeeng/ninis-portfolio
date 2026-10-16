import { Mail, Link2, FileText } from "lucide-react";

const TAGLINE = "Exploring materials, one experiment at a time."; // TODO: ganti

const LINKS = [
  { label: "Email", href: "mailto:nisrinazalfawork@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nisrinazalfaq/" }, // TODO
  { label: "CV", href: "#" }, // TODO
];

const SOCIALS = [
  { label: "Email", href: "mailto:nisrinazalfawork@gmail.com", Icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nisrinazalfaq/", Icon: Link2 }, // TODO
  { label: "CV", href: "#", Icon: FileText }, // TODO
];

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex flex-col items-center justify-center px-6 py-24 text-center"
    >
      <span
        aria-hidden
        className="font-[family-name:var(--font-uncial)] text-[8rem] leading-none md:text-[12rem]"
      >
        N
      </span>
      <p className="mt-2 text-3xl font-semibold md:text-5xl">Nisrina Zalfa Qarirah.</p>
      <p className="mt-3 text-foreground/70">{TAGLINE}</p>

      <div className="mt-8 flex gap-4">
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 p-3 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Icon size={20} aria-hidden />
          </a>
        ))}
      </div>

      <div className="mt-6 flex gap-6 text-sm">
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            {label}→
          </a>
        ))}
      </div>

      <p className="mt-10 text-xs text-foreground/50">© {CURRENT_YEAR}</p>
    </footer>
  );
}

