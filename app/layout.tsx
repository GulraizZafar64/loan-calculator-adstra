import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"
import MainHeader from "@/components/ui/main-header"
import MainFooter from "@/components/ui/main-footer"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Trendora Store - Free Financial Calculators & Tools",
  description:
    "Calculate loan EMI, insurance premiums, and mortgage payments with Trendora Store's free online calculators. Professional financial tools for smart decisions.",
  generator: "Trendora Store",
  keywords:
    "loan calculator, EMI calculator, insurance calculator, mortgage calculator, financial tools, Trendora Store",
  authors: [{ name: "Trendora Store", url: "https://quickupdatedaily.fun" }],
  creator: "Trendora Store",
  publisher: "Trendora Store",
  robots: "index, follow",
  openGraph: {
    title: "Trendora Store - Free Financial Calculators & Tools",
    description: "Calculate loan EMI, insurance premiums, and mortgage payments with our free online calculators.",
    url: "https://quickupdatedaily.fun",
    siteName: "Trendora Store",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trendora Store - Free Financial Calculators & Tools",
    description: "Calculate loan EMI, insurance premiums, and mortgage payments with our free online calculators.",
  },
    icons: {
    icon: "/fav.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <link rel="canonical" href="https://quickupdatedaily.fun" />
      </head>
      <body className="font-sans">
        <MainHeader/>
        {children}
        <MainFooter/>
        </body>

    </html>
  )
}
