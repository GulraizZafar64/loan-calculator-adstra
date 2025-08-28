import { Calculator } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions - Trendora Store",
  description:
    "Read Trendora Store's terms and conditions for using our free financial calculators and tools. Important legal information for users.",
  alternates: {
    canonical: "https://quickupdatedaily.fun/terms",
  },
}


export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">


      {/* Content */}
      <div className="container max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using Trendora Store, you accept and agree to be bound by the terms and provision of
              this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily use Trendora Store for personal, non-commercial transitory
              viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              The information and calculations provided by Trendora Store are for educational and informational
              purposes only. While we strive for accuracy, we make no warranties about the completeness, reliability,
              and accuracy of this information.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Results should be used as estimates only</li>
              <li>Always consult with qualified financial professionals for important decisions</li>
              <li>We are not responsible for any financial decisions made based on our calculations</li>
              <li>Actual loan terms, insurance rates, and other financial products may vary significantly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
            <p className="text-muted-foreground mb-4">
              In no event shall Trendora Store or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on Trendora Store's website, even if Trendora Store or a Quick
              Update Daily authorized representative has been notified orally or in writing of the possibility of such
              damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of
              liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accuracy of Materials</h2>
            <p className="text-muted-foreground mb-4">
              The materials appearing on Trendora Store's website could include technical, typographical, or
              photographic errors. Trendora Store does not warrant that any of the materials on its website are
              accurate, complete, or current. Trendora Store may make changes to the materials contained on its
              website at any time without notice. However, Trendora Store does not make any commitment to update the
              materials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Links</h2>
            <p className="text-muted-foreground mb-4">
              Trendora Store has not reviewed all of the sites linked to our website and is not responsible for the
              contents of any such linked site. The inclusion of any link does not imply endorsement by Quick Update
              Daily of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
            <p className="text-muted-foreground mb-4">
              Trendora Store may revise these terms of service for its website at any time without notice. By using
              this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably
              submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms & Conditions, please contact us at{" "}
              <a href="mailto:support@quickupdatedaily.fun" className="text-primary hover:underline">
                support@quickupdatedaily.fun
              </a>{" "}
              or through our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>

    </div>
  )
}
