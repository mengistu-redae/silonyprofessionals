import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Silony Professional IT Services",
  description:
    "Terms of service for Silony Professional IT Services - the terms and conditions governing the use of our services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-silony-primary">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: December 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using our services, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily use our services for personal, non-commercial transitory viewing
                only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Service Availability</h2>
              <p className="text-muted-foreground mb-4">
                We strive to maintain high availability of our services but cannot guarantee uninterrupted access at all
                times.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions regarding these terms, please contact us at info@silony.com or +251 90 500 0095.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
