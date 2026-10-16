import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Nisrina Zalfa Qarirah — Portfolio",
  description:
    "Portfolio of Nisrina Zalfa Qarirah, Materials Physics graduate focused on experimental research.",
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
