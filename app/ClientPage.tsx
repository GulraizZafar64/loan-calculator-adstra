"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Calculator, Car, Home, CreditCard, Shield, TrendingUp, Star, Users, CheckCircle, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ClientPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-8">

        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Trendora Store</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/calculators" className="text-sm font-medium hover:text-primary transition-colors">
              Calculators
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Get Started Button */}
          <Link href="/calculators">
            <Button className="hidden md:inline-flex">Get Started</Button>
          </Link>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <span>Trendora Store</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/calculators"
                  className="text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Calculators
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-4">
                  <Link href="/calculators" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

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
      <footer className="bg-muted py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Trendora Store</span>
              </div>
              <p className="text-muted-foreground">Professional financial calculators for smart money decisions.</p>
              <p className="text-sm text-muted-foreground mt-2">
                Support:{" "}
                <a href="mailto:support@quickupdatedaily.fun" className="text-primary hover:underline">
                  support@quickupdatedaily.fun
                </a>
              </p>
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
