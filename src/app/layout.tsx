import type { Metadata, Viewport } from "next";
import { Inter, Uncial_Antiqua } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const uncial = Uncial_Antiqua({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-uncial",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#233B5D",
};

export const metadata: Metadata = {
  title: "Nisrina Zalfa Qarirah — Portfolio",
  description:
    "Portfolio of Nisrina Zalfa Qarirah, Materials Physics graduate focused on experimental research.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${uncial.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                const isLight = saved === 'light' || (!saved && window.matchMedia('(prefers-color-scheme: light)').matches);
                const theme = isLight ? 'light' : 'dark';
                document.documentElement.classList.add(theme);
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
