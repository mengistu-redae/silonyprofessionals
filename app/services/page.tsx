import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ProcessSection } from "@/components/services/process-section"

export const metadata: Metadata = {
  title: "Our Services - Silony Professional IT Services",
  description:
    "Comprehensive IT infrastructure services including deployment, consultancy, and training for enterprise environments.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-16">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
    </main>
  )
}
