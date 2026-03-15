import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alden Ong — Fullstack Software Developer",
  description:
    "Fullstack developer based in Kuala Lumpur, Malaysia. Building production-ready web and mobile applications.",
  keywords: [
    "fullstack developer",
    "software engineer",
    "Malaysia",
    "Next.js",
    "React",
    "Flutter",
  ],
  authors: [{ name: "Alden Ong" }],
  openGraph: {
    title: "Alden Ong — Fullstack Software Developer",
    description:
      "Fullstack developer based in Kuala Lumpur, Malaysia.",
    url: "https://aldenong.dev",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Alden Ong — Fullstack Software Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alden Ong",
              jobTitle: "Fullstack Software Developer",
              url: "https://aldenong.dev",
              sameAs: [
                "https://github.com/aldenongjingyi",
                "https://linkedin.com/in/aldenong123",
                "https://www.instagram.com/aldenojy/",
              ],
              email: "aldenongjingyi@gmail.com",
              alumniOf: [
                { "@type": "CollegeOrUniversity", name: "Sunway University" },
                {
                  "@type": "CollegeOrUniversity",
                  name: "Lancaster University",
                },
                { "@type": "CollegeOrUniversity", name: "Taylor's University" },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
