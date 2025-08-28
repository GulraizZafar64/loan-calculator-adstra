import { Calculator } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Trendora Store",
  description:
    "Find answers to frequently asked questions about Trendora Store's financial calculators. Get help with loan EMI, insurance, and mortgage calculations.",
  alternates: {
    canonical: "https://quickupdatedaily.fun/faq",
  },
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Trendora Store</span>
          </div>
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
        </div>
      </header>

      {/* Content */}
      <div className="container max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our financial calculators
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">Are your calculators accurate and reliable?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, our calculators use industry-standard formulas and are regularly tested for accuracy. However, the
              results should be used as estimates for planning purposes. For final decisions, always consult with
              financial professionals or lenders.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">Do you store my financial information?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No, we do not store any of your financial data. All calculations are performed locally in your browser,
              and no information is sent to our servers. Your privacy and data security are our top priorities.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">Are your calculators free to use?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, all our calculators are completely free to use. There are no hidden fees, registration requirements,
              or limitations on usage. We believe financial planning tools should be accessible to everyone.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">How do I use the EMI calculator?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Simply enter your loan amount, interest rate (annual), and loan tenure (in months or years). The
              calculator will instantly show your monthly EMI, total interest payable, and total amount. You can also
              view a detailed amortization schedule.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">How accurate is the car insurance calculator?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Our car insurance calculator provides estimates based on common factors like vehicle value, age, location,
              and coverage type. Actual premiums may vary based on additional factors like driving history, credit
              score, and specific insurer policies. Use it as a starting point for comparison shopping.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">What's included in the mortgage calculator?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Our mortgage calculator includes principal and interest calculations, PMI (if down payment is less than
              20%), property taxes, and homeowners insurance. It provides monthly payment breakdowns and complete
              amortization schedules to help you understand your home loan.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">Can I save or print my calculation results?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, you can print the results page directly from your browser or save it as a PDF. Since calculations are
              performed locally, you can also bookmark the page with your inputs for future reference.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">Do your calculators work on mobile devices?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, all our calculators are fully responsive and work seamlessly on smartphones, tablets, and desktop
              computers. The interface adapts to your screen size for optimal usability.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">What if I find an error in the calculations?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              If you believe there's an error in our calculations, please contact us through our contact page with
              details about the issue. We take accuracy seriously and will investigate and fix any problems promptly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">Can I suggest new calculator features?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We welcome feedback and suggestions for new calculators or features. Please reach out through our contact
              page with your ideas. We regularly update our tools based on user feedback.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions? We're here to help!</p>
          <Link href="/contact">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

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
