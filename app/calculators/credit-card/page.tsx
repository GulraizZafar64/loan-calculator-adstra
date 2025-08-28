import { Metadata } from "next"
import CreditCardCalculatorMain from "./credit-card"

export const metadata: Metadata = {
  title: "Credit Card Payoff Calculator - Trendora Store",
  description:
    "Easily calculate how long it will take to pay off your credit card debt and how much interest you'll pay. Compare minimum payments vs higher payments to save money and time.",
  alternates: {
    canonical: "https://trendorastore.online/credit-card",
  },
  openGraph: {
    title: "Credit Card Payoff Calculator - Trendora Store",
    description:
      "Use our free Credit Card Payoff Calculator to estimate payoff time, total interest, and compare different payment strategies to save money.",
    url: "https://trendorastore.online/credit-card",
  },
}

export default function CreditCardCalculator() {

  return (
    <CreditCardCalculatorMain/>
  )
}
