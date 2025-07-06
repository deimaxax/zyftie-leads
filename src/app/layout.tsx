import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Custom Software Development Company | AI, Data, Mobile & Web Solutions | Zyftie",
  description: "Leading custom software development company specializing in AI/ML solutions, data engineering, mobile app development, and web applications. Transform your business with enterprise-grade software solutions.",
  keywords: "custom software development, AI development services, machine learning solutions, data engineering, mobile app development, web application development, enterprise software, digital transformation, software consulting, AI consulting, custom software solutions, software development company",
  authors: [{ name: "Zyftie" }],
  creator: "Zyftie",
  publisher: "Zyftie",
  openGraph: {
    title: "Custom Software Development Company | AI, Data, Mobile & Web Solutions | Zyftie",
    description: "Leading custom software development company specializing in AI/ML solutions, data engineering, mobile app development, and web applications. Transform your business with enterprise-grade software solutions.",
    url: "https://zyftie.com",
    siteName: "Zyftie",
    type: "website",
    images: [
      {
        url: "https://zyftie.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zyftie - Custom Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company | AI, Data, Mobile & Web Solutions | Zyftie",
    description: "Leading custom software development company specializing in AI/ML solutions, data engineering, mobile app development, and web applications.",
    images: ["https://zyftie.com/og-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://zyftie.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
