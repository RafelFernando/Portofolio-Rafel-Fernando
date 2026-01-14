import type { Metadata } from "next";
import {
  Playfair_Display,
  Libre_Baskerville,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Portofolio | Rafel Fernando",
  description:
    "Rafel Fernando adalah freelance full stack web developer. Berpengalaman membangun website menggunakan Next.js, React, Laravel, Flask, PHP, Node.js, Express. Menerima jasa pembuatan website UMKM, landing page, company profile, dan AI customer service untuk website.",
  keywords: [
    "jasa pembuatan website",
    "freelance web developer",
    "full stack developer",
    "full stack developer next js",
    "full stack developer react js",
    "full stack developer laravel",
    "full stack developer flask",
    "full stack developer php",
    "full stack developer node js",
    "full stack developer express js",
    "jasa website UMKM",
    "Next.js developer",
    "React developer",
    "Laravel developer",
    "Flask developer",
    "PHP developer",
    "AI customer service",
    "landing page UMKM",
    "company profile",
    "universitas duta bangsa surakarta",
    "mahasiswa universitas duta bangsa surakarta",
    "programming profesional universitas duta bangsa surakarta",
  ],
  authors: [{ name: "Rafel Fernando" }],
  creator: "Rafel Fernando",
  publisher: "Rafel Fernando",
  metadataBase: new URL("https://rafelfernando.dev"), // ganti domain kamu
  openGraph: {
    title: "Rafel Fernando | Full Stack Web Developer & Website UMKM",
    description:
      "Freelance full stack web developer berpengalaman di Next.js, React, Laravel, Flask, PHP. Menerima jasa pembuatan website UMKM, landing page, company profile, dan AI customer service.",
    url: "https://rafelfernando.dev",
    siteName: "Rafel Fernando Portofolio",
    images: [
      {
        url: "/rafel.jpg",
        width: 1200,
        height: 630,
        alt: "Rafel Fernando Full Stack Web Developer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${headingFont.variable}
          ${bodyFont.variable}
          ${monoFont.variable}
          
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
