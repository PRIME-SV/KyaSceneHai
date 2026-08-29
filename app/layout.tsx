import type { Metadata, Viewport } from "next";
import { DM_Sans, Libre_Baskerville, Mukta } from "next/font/google";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/data/site";
import "./globals.css";

const display = Mukta({
  subsets: ["devanagari", "latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const serif = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "700"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Pick a mood and play the perfect YouTube playlist — chai, driving, rain, studying, and more. One tap, no account needed.",
  applicationName: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0807",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
