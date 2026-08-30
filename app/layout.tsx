import type { Metadata, Viewport } from "next";
import { DM_Sans, Libre_Baskerville, Mukta } from "next/font/google";
import {
  SITE_NAME,
  STORAGE_KEYS,
  getSiteDescription,
} from "@/data/site";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://marathikatta.local",
  ),
  title: {
    default: `मराठी गाणी | Marathi Gane Online | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: getSiteDescription("mr"),
  applicationName: SITE_NAME,
  keywords: [
    "मराठी गाणी",
    "marathi gane",
    "marathi songs",
    "गणपती गाणी",
    "ganapati gane",
    "ganpati songs",
    SITE_NAME,
  ],
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "mr_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0807",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="mr"
      className={`${display.variable} ${serif.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem(${JSON.stringify(STORAGE_KEYS.locale)});if(l==="mr"||l==="en")document.documentElement.lang=l}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
