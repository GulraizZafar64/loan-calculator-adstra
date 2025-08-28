import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, ArrowLeft, Shield, Users, TrendingUp, CheckCircle, Target, Award } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Trendora Store",
  description:
    "Learn about Trendora Store's mission to provide free, accurate financial calculators.",
  alternates: {
    canonical: "https://trendorastore.online/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Header */}


      <div className="container max-w-4xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Trendora Store</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Empowering individuals and families to make informed financial decisions through accurate, easy-to-use
            calculators and educational resources.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground text-lg leading-relaxed">
              We believe that everyone deserves access to professional-grade financial tools. Our mission is to
              democratize financial planning by providing free, accurate, and easy-to-understand calculators that help
              you make confident decisions about loans, insurance, mortgages, and other important financial matters.
            </p>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Accuracy & Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We use industry-standard formulas and regularly update our calculations to ensure you receive the most
                  accurate results possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>User-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Every feature is designed with you in mind. We prioritize simplicity, clarity, and ease of use in all
                  our financial tools.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Continuous Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We constantly enhance our calculators based on user feedback and evolving financial industry
                  standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What We Offer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">What We Offer</CardTitle>
            <CardDescription className="text-center">
              Professional financial calculators designed for accuracy and ease of use
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Loan EMI Calculator</h4>
                    <p className="text-sm text-muted-foreground">
                      Calculate monthly installments for personal loans, home loans, and auto loans with detailed
                      amortization schedules.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Car Insurance Calculator</h4>
                    <p className="text-sm text-muted-foreground">
                      Estimate your vehicle insurance premiums based on car value, location, and driver profile.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Mortgage Calculator</h4>
                    <p className="text-sm text-muted-foreground">
                      Plan your home purchase with comprehensive mortgage calculations including taxes, insurance, and
                      PMI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Credit Card Calculator</h4>
                    <p className="text-sm text-muted-foreground">
                      Understand interest charges and payoff timelines for your credit card debt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Why Choose Trendora Store?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Professional-Grade Accuracy</h4>
                    <p className="text-sm text-muted-foreground">
                      Our calculators use the same formulas employed by financial institutions and professionals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">100% Free & Private</h4>
                    <p className="text-sm text-muted-foreground">
                      All calculations are performed locally in your browser. We don't store or share your financial
                      data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">User-Friendly Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Clean, intuitive interfaces that make complex financial calculations simple and understandable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Detailed Breakdowns</h4>
                    <p className="text-sm text-muted-foreground">
                      Get comprehensive results with payment schedules, interest breakdowns, and helpful explanations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calculator className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Mobile Responsive</h4>
                    <p className="text-sm text-muted-foreground">
                      Access our calculators from any device - desktop, tablet, or smartphone.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Regular Updates</h4>
                    <p className="text-sm text-muted-foreground">
                      We continuously improve our tools based on user feedback and industry changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="font-semibold text-orange-800 mb-2">Important Disclaimer</h3>
              <p className="text-sm text-orange-700">
                The calculators on this website are designed to provide estimates and educational information only.
                Results should not be considered as professional financial advice. Actual loan terms, insurance
                premiums, and other financial products may vary based on additional factors not included in these
                calculations. Always consult with qualified financial professionals before making important financial
                decisions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Explore our calculators and take control of your financial planning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="text-lg px-8">
                Try Our Calculators
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
