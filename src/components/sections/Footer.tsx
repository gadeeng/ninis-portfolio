const TAGLINE = "Exploring materials, one experiment at a time."; // TODO: ganti

function GmailIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="52 42 88 66"
      aria-hidden="true"
      className={className}
    >
      <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
      <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
      <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
      <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
      <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
    </svg>
  );
}

function LinkedInIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      aria-hidden="true"
      className={className}
    >
      <rect width="72" height="72" rx="14" fill="#0A66C2" />
      <path
        d="M62 62H51.316V43.802c0-4.99-1.896-7.778-5.845-7.778-4.296 0-6.541 2.902-6.541 7.778V62H28.633V27.333h10.297V32s3.096-5.726 10.453-5.726C56.736 26.274 62 30.764 62 40.051V62zM16.349 22.794c-3.507 0-6.349-2.864-6.349-6.397 0-3.533 2.842-6.397 6.349-6.397 3.507 0 6.348 2.864 6.348 6.397 0 3.533-2.841 6.397-6.348 6.397zM11.033 62h10.736V27.333H11.033V62z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function InstagramIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient
          id="instagram-radial"
          cx="20%"
          cy="105%"
          r="130%"
        >
          <stop offset="0%" stopColor="#ffdd55" />
          <stop offset="20%" stopColor="#ff543e" />
          <stop offset="60%" stopColor="#c837ab" />
          <stop offset="100%" stopColor="#3771c8" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#instagram-radial)" />
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="3.3"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
      />
      <circle cx="15.8" cy="8.2" r="0.9" fill="#ffffff" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Gmail",
    href: "mailto:nisrinazalfawork@gmail.com",
    Icon: GmailIcon,
    hoverClass:
      "hover:border-[#ea4335]/60 hover:bg-[#ea4335]/10 hover:shadow-[0_0_16px_rgba(234,67,53,0.25)]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nisrinazalfaq/",
    Icon: LinkedInIcon,
    hoverClass:
      "hover:border-[#0a66c2]/60 hover:bg-[#0a66c2]/10 hover:shadow-[0_0_16px_rgba(10,102,194,0.25)]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/nisrinazalfaq",
    Icon: InstagramIcon,
    hoverClass:
      "hover:border-[#e4405f]/60 hover:bg-[#e4405f]/10 hover:shadow-[0_0_16px_rgba(228,64,95,0.25)]",
  },
];

function NisrinaSymbolIcon({ size = 120, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <title>Nisrina Zalfa Qarirah Symbol</title>
      {/* Monogram Letterform N (Potential Flux) */}
      <path d="M 68 38 L 102 38 L 162 164 C 174 124 174 80 154 38 L 188 38 C 222 90 222 166 188 218 L 154 218 L 94 92 C 82 132 82 176 102 218 L 68 218 C 34 166 34 90 68 38 Z" />
    </svg>
  );
}

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex flex-col items-center justify-center px-6 py-24 text-center"
    >
      <div className="mb-6 flex items-center justify-center transition-transform duration-500 hover:scale-105">
        <NisrinaSymbolIcon
          size={140}
          className="h-28 w-28 text-[var(--logo-symbol)] drop-shadow-[0_8px_32px_rgba(10,71,184,0.35)] md:h-36 md:w-36"
        />
      </div>
      <p className="mt-2 text-3xl font-semibold md:text-5xl">Nisrina Zalfa Qarirah.</p>
      <p className="mt-3 text-foreground/70">{TAGLINE}</p>

      <div className="mt-8 flex gap-4">
        {SOCIALS.map(({ label, href, Icon, hoverClass }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full border border-foreground/15 p-3 text-foreground/80 transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${hoverClass}`}
          >
            <Icon size={22} />
          </a>
        ))}
      </div>

      <p className="mt-10 text-xs text-foreground/50">© {CURRENT_YEAR}</p>
    </footer>
  );
}


