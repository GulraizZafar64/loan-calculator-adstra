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
<script type='text/javascript' src='//pl27527691.revenuecpmgate.com/cd/16/7b/cd167b7e909b4f8df92d575701422d18.js'></script>
<script type='text/javascript' src='//pl27536183.revenuecpmgate.com/aa/55/4e/aa554e97ef841951028bf011744940a4.js'></script>
<script async data-cfasync="false" src="//pl27528535.revenuecpmgate.com/baa0e41441eed570b5d25659da7e0ee6/invoke.js"></script>
<div id="container-baa0e41441eed570b5d25659da7e0ee6"></div>
      <HomePageClient />
    </>
  );
}
