import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", weight: ["500","600","700"], style: ["normal","italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"Positive Crave — Konsep Grace","description":"Konsep desain toko brand keintiman pasangan bergaya amplop sutra, dibuat untuk kontes brief Positive Crave","url":"https://crave-grace.pintuweb.id"};

export const metadata = {
  metadataBase: new URL("https://crave-grace.pintuweb.id"),
  title: "Positive Crave — Konsep Grace",
  description: "Konsep toko Positive Crave yang anggun: koleksi disusun seperti susunan acara tiga babak, penyusun hadiah berkartu, dan surat untuk berdua.",
  applicationName: "Positive Crave",
  keywords: ["intimacy brand", "wellness pasangan", "landing page elegan", "desain web"],
  authors: [{ name: "Positive Crave" }],
  creator: "Positive Crave",
  publisher: "Positive Crave",
  alternates: { canonical: "https://crave-grace.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://crave-grace.pintuweb.id",
    siteName: "Positive Crave — Konsep Grace",
    title: "Positive Crave — Konsep Grace",
    description: "Konsep toko Positive Crave yang anggun: koleksi disusun seperti susunan acara tiga babak, penyusun hadiah berkartu, dan surat untuk berdua.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Positive Crave — Konsep Grace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Positive Crave — Konsep Grace",
    description: "Konsep toko Positive Crave yang anggun: koleksi disusun seperti susunan acara tiga babak, penyusun hadiah berkartu, dan surat untuk berdua.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: "#4a2338",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${inter.variable} antialiased bg-silk text-plum-soft overflow-x-hidden max-w-[100vw]`}>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-plum focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-silk"
        >
          Lompat ke konten utama
        </a>
        <Navbar />
        <main id="konten">{children}</main>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Konsep desain untuk kontes, buatan PintuWeb — bukan situs resmi merek ini.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=crave-grace" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
