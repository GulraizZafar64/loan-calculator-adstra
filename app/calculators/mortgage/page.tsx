import { Metadata } from "next";
import MortgageCalculatorMain from "./mortgage";

export const metadata: Metadata = {
  title: "Mortgage Calculator - Trendora Store",
  description:
    "Use our free Mortgage Calculator to estimate your monthly payments, total interest, and amortization schedule. Plan your home loan with accurate calculations.",
  alternates: {
    canonical: "https://quickupdatedaily.fun/mortgage",
  },
  openGraph: {
    title: "Mortgage Calculator - Trendora Store",
    description:
      "Free Mortgage Calculator to calculate monthly payments, total interest, and detailed amortization schedule for your home loan.",
    url: "https://quickupdatedaily.fun/mortgage",
  },
}

export default function MortgageCalculator() {

  return (
  <MortgageCalculatorMain/>
  )
}
