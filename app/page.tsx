// app/page.tsx (or pages/index.tsx if you're using the old routing)
import HomePageClient from "./HomePageClient";
import type { Metadata } from "next";
import Script from "next/script"; // ✅ Import Script component

export const metadata: Metadata = {
  title: "Trendora Store - Free Financial Calculators & Tools",
  description:
    "Calculate loan EMI, insurance premiums, and mortgage payments with Trendora Store's free online calculators. Professional financial tools for smart decisions.",
  openGraph: {
    title: "Trendora Store - Free Financial Calculators & Tools",
    description: "Calculate loan EMI, insurance premiums, and mortgage payments with our free online calculators.",
    url: "https://quickupdatedaily.fun",
  },
  alternates: {
    canonical: "https://quickupdatedaily.fun",
  },
};

export default function HomePage() {
  return (
    <>
      <HomePageClient />
    </>
  );
}
