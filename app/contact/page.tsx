import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact Us - Silony Professional IT Services",
  description:
    "Get in touch with Silony Professional IT Services. Contact us for enterprise IT infrastructure solutions, consultancy, and training.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      <ContactSection />
    </main>
  )
}
