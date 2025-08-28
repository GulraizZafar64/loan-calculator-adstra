
import { Metadata } from "next"
import CarInsuranceCalculatorMain from "./car-insurance-main"
export const metadata: Metadata = {
  title: "Car Insurance Premium Calculator - Trendora Store",
  description:
    "Estimate your car insurance premium instantly. Use our free Car Insurance Premium Calculator to calculate monthly and annual costs based on your vehicle and driving profile.",
  alternates: {
    canonical: "https://trendorastore.online/car-insurance-calculator",
  },
  openGraph: {
    title: "Car Insurance Premium Calculator - Trendora Store",
    description:
      "Estimate your car insurance premium instantly. Calculate monthly and annual costs based on your vehicle value, age, location, driver profile, and coverage type.",
    url: "https://trendorastore.online/car-insurance-calculator",
  },
}

export default function CarInsuranceCalculator() {

  return (
   <CarInsuranceCalculatorMain/>
  )
}
