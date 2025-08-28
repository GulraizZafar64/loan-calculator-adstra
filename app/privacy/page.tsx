import { Calculator } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Trendora Store",
  description:
    "Read Trendora Store's privacy policy. Learn how we protect your data and ensure your financial information stays secure with our calculators.",
  alternates: {
    canonical: "https://quickupdatedaily.fun/privacy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">


      {/* Content */}
      <div className="container max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              Trendora Store is committed to protecting your privacy. Our calculators are designed to work entirely
              in your browser, which means:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>We do not collect or store any financial data you enter into our calculators</li>
              <li>All calculations are performed locally on your device</li>
              <li>We may collect basic analytics data such as page views and usage patterns</li>
              <li>We do not use cookies to track personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
            <p className="text-muted-foreground mb-4">Any information we collect is used solely to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Improve our website and calculator functionality</li>
              <li>Understand how users interact with our tools</li>
              <li>Provide better user experience</li>
              <li>Ensure our calculators are working correctly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground mb-4">We take data security seriously:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All calculations are performed client-side in your browser</li>
              <li>No financial data is transmitted to our servers</li>
              <li>Our website uses HTTPS encryption for all communications</li>
              <li>We regularly update our security measures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">We may use third-party services for:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Website analytics (Google Analytics)</li>
              <li>Content delivery and hosting</li>
              <li>Advertising (Google AdSense)</li>
            </ul>
            <p className="text-muted-foreground">
              These services have their own privacy policies and may collect data according to their terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use our calculators without providing personal information</li>
              <li>Clear your browser data at any time</li>
              <li>Contact us with privacy concerns</li>
              <li>Request information about data we may have collected</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an
              updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this privacy policy or our practices, please contact us at{" "}
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
