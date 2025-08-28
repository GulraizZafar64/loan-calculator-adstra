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
    url: "https://trendorastore.online",
  },
  alternates: {
    canonical: "https://trendorastore.online",
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        type="text/javascript"
        src="//pl27527691.effectivecpmrate.com/cd/16/7b/cd167b7e909b4f8df92d575701422d18.js"
      />
      <HomePageClient />
    </>
  );
}
