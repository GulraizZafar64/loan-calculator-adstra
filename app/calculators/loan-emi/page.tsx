import { Metadata } from "next"
import LoanEMICalculatorMain from "./loan-emi"

export const metadata: Metadata = {
  title: "Loan EMI Calculator - Trendora Store",
  description:
    "Calculate your monthly loan installments (EMI) instantly with a detailed breakdown and amortization schedule. Works for personal loans, home loans, car loans, and more.",
  alternates: {
    canonical: "https://quickupdatedaily.fun/loan-emi",
  },
  openGraph: {
    title: "Loan EMI Calculator - Trendora Store",
    description:
      "Easily calculate EMI with a complete amortization schedule for personal, home, or car loans. Get detailed monthly principal and interest breakdowns.",
    url: "https://quickupdatedaily.fun/loan-emi",
  },
}

export default function LoanEMICalculator() {


  return (
    <LoanEMICalculatorMain/>
  )
}
