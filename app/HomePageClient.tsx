"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Calculator, Car, Home, CreditCard, Shield, TrendingUp, Star, Users, CheckCircle, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePageClient() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">


      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Free Online Calculators for <span className="text-primary">Insurance & Loans</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Use our professional financial tools to calculate your insurance premiums, loan installments, and mortgage
            payments easily. Make informed financial decisions with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculators">
              <Button size="lg" className="text-lg px-8">
                Start Calculating
              </Button>
            </Link>
            <Link href="#how-to-use">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Cards */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Calculator</h2>
            <p className="text-muted-foreground text-lg">
              Professional financial calculators designed for accuracy and ease of use
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Loan EMI Calculator</CardTitle>
                <CardDescription>
                  Calculate monthly installments for personal loans, home loans, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/loan-emi">
                  <Button className="w-full">Calculate EMI</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Car className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Car Insurance Calculator</CardTitle>
                <CardDescription>Get estimated premiums for your vehicle insurance coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/car-insurance">
                  <Button variant="secondary" className="w-full">
                    Calculate Premium
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mortgage Calculator</CardTitle>
                <CardDescription>Calculate home loan payments with detailed amortization schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/mortgage">
                  <Button className="w-full">Calculate Mortgage</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <CreditCard className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Credit Card Calculator</CardTitle>
                <CardDescription>Calculate interest payments and payoff time for credit cards</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/credit-card">
                  <Button variant="secondary" className="w-full">
                    Calculate Interest
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-to-use" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Use Our Calculators</h2>
            <p className="text-muted-foreground text-lg">
              Follow these simple steps to get accurate financial calculations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Calculator</h3>
              <p className="text-muted-foreground">
                Select the calculator that matches your financial need - loan EMI, insurance premium, or mortgage.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter Details</h3>
              <p className="text-muted-foreground">
                Fill in the required information like loan amount, interest rate, tenure, or vehicle details.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Results</h3>
              <p className="text-muted-foreground">
                View detailed calculations, payment schedules, and helpful insights to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Calculators?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Free & Secure</h3>
              <p className="text-muted-foreground">
                All calculations are performed locally in your browser. No data is stored or shared.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Results</h3>
              <p className="text-muted-foreground">
                Professional-grade formulas ensure precise calculations for all your financial needs.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-muted-foreground">
                Simple, intuitive interface designed for both beginners and financial professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground text-lg">
              Trusted by thousands of users for accurate financial calculations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">5.0</span>
              </div>
              <p className="text-muted-foreground mb-4">
                "The EMI calculator helped me plan my home loan perfectly. The detailed breakdown made it easy to
                understand my monthly payments."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Home Buyer</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">5.0</span>
              </div>
              <p className="text-muted-foreground mb-4">
                "Excellent car insurance calculator! It gave me a realistic estimate that matched what I actually paid.
                Very accurate."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Mike Chen</p>
                  <p className="text-sm text-muted-foreground">Car Owner</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">5.0</span>
              </div>
              <p className="text-muted-foreground mb-4">
                "Simple, fast, and reliable. I use these calculators regularly for my financial planning. Highly
                recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Emily Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Financial Planner</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center space-x-8 text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>50,000+ Calculations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>100% Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  )
}
