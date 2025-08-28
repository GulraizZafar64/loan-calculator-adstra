import { Calculator } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MainFooter = () => {
  return (
    <div>
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
                {/* <li>
                  <Link href="/guides" className="hover:text-primary">
                    Financial Guides
                  </Link>
                </li> */}
                <li>
                  <Link href="/faq" className="hover:text-primary">
                    FAQ
                  </Link>
                </li>
                {/* <li>
                  <Link href="/blog" className="hover:text-primary">
                    Blog
                  </Link>
                </li> */}
                <li>
                  <Link href="/contact" className="hover:text-primary">
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

export default MainFooter
