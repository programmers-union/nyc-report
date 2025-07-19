import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nycreport.org/"),
  title: "Business,Politics, Technology,Health,Science,Sports",
  description:
    "Stay updated with breaking news, global business insights, and financial strategies. Explore business investments, market trends, and analysis.",
  keywords:
    "Breaking business news,Politics, Global financial insights, Global business investments, Market trends 2025, Private equity insights, Venture capital news, Cryptocurrency updates, Blockchain analysis, AI & tech startup news, Sustainable investing, ESG strategies, Stock market tips, Smart investing,",
  openGraph: {
    title: "Business,Politics, Technology,Health,Science,Sports",
    description:
      "Stay updated with breaking news, global business insights, and financial strategies. Explore business investments, market trends, and analysis.",
    url: "https://www.nycreport.org/",
    siteName: "nycreport",
    images: [
      {
        url: "https://www.nycreport.org/images/nyc-report-logo.webp",
        width: 1024,
        height: 1024,
        alt: "nycreport Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business,Politics, Technology,Health,Science,Sports",
    description:
      "Stay updated with breaking news, global business insights, and financial strategies. Explore business investments, market trends, and analysis.",
    images:
      "https://www.nycreport.org/images/nyc-report-logo.webp",
  },
  alternates: {
    canonical: "https://www.nycreport.org/",
    languages: {
      en: "https://www.nycreport.org/",
      "x-default": "https://www.nycreport.org/",
    },
  },
  other: {
    author: "nycreporter",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        
          <Script
          id="structured-data-newsmediaorganization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "NewsMediaOrganization",
                "@id": "https://www.nycreport.org/#organization",
                name: "Nycreporter",
                url: "https://www.nycreport.org/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.nycreport.org/images/nyc-report-logo.webp",
                  width: 1024,
                  height: 1024,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Customer Service",
                  areaServed: "US",
                  availableLanguage: ["English"],
                },
               
                sameAs: ["https://www.nycreport.org/"],
              },
              null,
              2
            ),
          }}
        />

          <Script
          id="structured-data-site-navigation"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                name: [
                  "Home",
                  "Business",
                  "Politics",
                  "Technology",
                  "Science",
                  "Sports",
                  "Health"
                ],
                url: [
                  "https://www.nycreport.org/",
                  "https://www.nycreport.org/business/",
                  "https://www.nycreport.org/technology/",
                  "https://www.nycreport.org/politics/",
                  "https://www.nycreport.org/health/",
                  "https://www.nycreport.org/science/",
                  "https://www.nycreport.org/sports",
                 
                ],
              },
              null,
              2
            ),
          }}
        />
         <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google-site-verification" content="kon_27CjROUsnUED0oXPUpqDv_k4SHJuOy9wMOoW2Nk" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
