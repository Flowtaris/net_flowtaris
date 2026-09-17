import type { Metadata } from "next";
import { Outfit, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd, { getOrganizationSchema, getWebSiteSchema } from "@/components/seo/JsonLd";

const fontBody = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

const fontHeading = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "700", "800"],
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flowtaris.net'),
  title: {
    default: 'Flowtaris Accountability Engine — Enterprise Integration Telemetry & DORA Metrics',
    template: '%s | Flowtaris Accountability Engine',
  },
  description: 'The operational transparency layer of Flowtaris. Live DORA metrics, engineering delivery standards, compliance documentation, and real-time integration telemetry for enterprise ERP systems.',
  keywords: [
    'enterprise integration metrics',
    'DORA metrics dashboard',
    'ERP integration monitoring',
    'software delivery accountability',
    'engineering standards agency',
    'enterprise compliance documentation',
    'integration telemetry',
    'NetSuite integration monitoring',
    'SAP integration health',
    'Flowtaris',
    'Flowtaris accountability',
    'enterprise ERP consulting',
  ],
  authors: [{ name: 'Flowtaris', url: 'https://flowtaris.com' }],
  creator: 'Flowtaris',
  publisher: 'Flowtaris',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flowtaris.net',
    siteName: 'Flowtaris Accountability Engine',
    title: 'Flowtaris Accountability Engine — Live DORA Metrics & Integration Telemetry',
    description: 'The operational transparency layer of Flowtaris. Live engineering metrics, delivery standards, and compliance documentation proving enterprise-grade software delivery.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Flowtaris Accountability Engine Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flowtaris Accountability Engine — Live Enterprise Metrics',
    description: 'Real-time DORA metrics, delivery standards, and integration telemetry. The proof engine behind Flowtaris enterprise consulting.',
    images: ['/logo.png'],
    creator: '@flowtaris',
  },
  alternates: {
    canonical: 'https://flowtaris.net',
  },
  other: {
    'google-site-verification': 'YOUR_VERIFICATION_CODE_HERE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
      </head>
      <body
        className={`${fontBody.variable} ${fontHeading.variable} ${fontMono.variable} font-sans antialiased text-gray-900 flex flex-col min-h-screen selection:bg-[var(--color-brand-accent)] selection:text-white overflow-x-hidden w-full`}
      >
        {children}
      </body>
    </html>
  );
}
