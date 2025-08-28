import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Car, Home, CreditCard, ArrowRight, TrendingUp, Shield, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Financial Calculators - Trendora Store",
  description:
    "Choose from our comprehensive suite of financial calculators including loan EMI, car insurance, mortgage, and credit card calculators. Free and accurate tools.",
  openGraph: {
    title: "Financial Calculators - Trendora Store",
    description:
      "Choose from our comprehensive suite of financial calculators including loan EMI, car insurance, mortgage, and credit card calculators.",
    url: "https://trendorastore.online/calculators",
  },
}

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <head>
        <link rel="canonical" href="https://trendorastore.online/calculators" />
      </head>

      {/* Header */}

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Financial <span className="text-primary">Calculators</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Choose from our comprehensive suite of financial calculators designed to help you make informed decisions
            about loans, insurance, and investments.
          </p>
        </div>
      </section>

      {/* Calculator Grid */}
      <section className="py-8 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Loan EMI Calculator */}
            <Card className="hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Calculator className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Loan EMI Calculator</CardTitle>
                    <CardDescription className="text-base">
                      Calculate monthly installments for any type of loan
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Get accurate EMI calculations for personal loans, home loans, car loans, and more. Includes detailed
                  amortization schedule and total interest breakdown.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    Monthly EMI calculation
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    Total interest payable
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    Amortization schedule
                  </li>
                </ul>
                <Link href="/calculators/loan-emi">
                  <Button className="w-full mt-4">Calculate EMI</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Car Insurance Calculator */}
            <Card className="hover:shadow-lg transition-all duration-300 group border-2 hover:border-secondary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Car className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Car Insurance Calculator</CardTitle>
                    <CardDescription className="text-base">Estimate your vehicle insurance premium</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Get estimated insurance premiums based on your vehicle details, location, and coverage preferences.
                  Compare different coverage options.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-secondary" />
                    Premium estimation
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-secondary" />
                    Coverage comparison
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-secondary" />
                    Cost-saving tips
                  </li>
                </ul>
                <Link href="/calculators/car-insurance">
                  <Button variant="secondary" className="w-full mt-4">
                    Calculate Premium
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Mortgage Calculator */}
            <Card className="hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Mortgage Calculator</CardTitle>
                    <CardDescription className="text-base">Calculate home loan payments and schedules</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Comprehensive mortgage calculator with support for down payments, PMI, property taxes, and insurance.
                  Perfect for home buyers.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    Monthly payment breakdown
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    PMI calculations
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    Amortization table
                  </li>
                </ul>
                <Link href="/calculators/mortgage">
                  <Button className="w-full mt-4">Calculate Mortgage</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Credit Card Calculator */}
            <Card className="hover:shadow-lg transition-all duration-300 group border-2 hover:border-secondary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <CreditCard className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Credit Card Calculator</CardTitle>
                    <CardDescription className="text-base">Calculate payoff time and interest costs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Understand how long it will take to pay off your credit card debt and how much interest you'll pay
                  with different payment strategies.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-secondary" />
                    Payoff timeline
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-secondary" />
                    Interest calculations
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-secondary" />
                    Payment strategies
                  </li>
                </ul>
                <Link href="/calculators/credit-card">
                  <Button variant="secondary" className="w-full mt-4">
                    Calculate Interest
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Use Our Calculators?</h2>
            <p className="text-muted-foreground text-lg">Professional-grade tools trusted by thousands of users</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                All calculations are performed locally. Your financial data never leaves your device.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Results</h3>
              <p className="text-muted-foreground">
                Industry-standard formulas ensure precise calculations for all financial scenarios.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
              <p className="text-muted-foreground">
                Intuitive interface with helpful explanations and detailed breakdowns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Trendora Store</span>
              </div>
              <p className="text-muted-foreground">Professional financial calculators for smart money decisions.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Calculators</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/calculators/loan-emi" className="hover:text-primary">
                    Loan EMI
                  </Link>
                </li>
                <li>
                  <Link href="/calculators/car-insurance" className="hover:text-primary">
                    Car Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/calculators/mortgage" className="hover:text-primary">
                    Mortgage
                  </Link>
                </li>
                <li>
                  <Link href="/calculators/credit-card" className="hover:text-primary">
                    Credit Card
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/guides" className="hover:text-primary">
                    Financial Guides
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-primary">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-primary">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2025 Trendora Store. All rights reserved. Professional financial calculators for informed
              decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
