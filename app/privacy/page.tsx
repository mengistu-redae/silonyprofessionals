import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Silony Professional IT Services",
  description:
    "Privacy policy for Silony Professional IT Services - how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-silony-primary">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: December 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you create an account, contact us, or
                use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to provide, maintain, and improve our services, communicate with you,
                and comply with legal obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at info@silony.com or +251 90 500
                0095.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
