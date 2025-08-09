import type { Metadata } from "next"
import { ServiceDetailHero } from "@/components/services/service-detail-hero"
import { ServiceFeatures } from "@/components/services/service-features"
import { ServiceProcess } from "@/components/services/service-process"

export const metadata: Metadata = {
  title: "Deployment & Implementation Services - Silony Professional IT Services",
  description:
    "Professional deployment and implementation of enterprise IT infrastructure solutions with expert guidance and support.",
}

export default function DeploymentPage() {
  const serviceData = {
    title: "Deployment & Implementation Services",
    description: "Professional deployment and implementation of enterprise IT infrastructure solutions",
    features: [
      "Server Deployment & Configuration",
      "Cloud Migration Services",
      "System Integration",
      "Performance Optimization",
      "Network Infrastructure Setup",
      "Security Implementation",
    ],
    benefits: [
      "Minimal downtime during deployment",
      "Scalable infrastructure solutions",
      "Expert configuration and optimization",
      "Comprehensive testing and validation",
      "24/7 support during implementation",
      "Knowledge transfer and documentation",
    ],
  }

  return (
    <main className="min-h-screen pt-16">
      <ServiceDetailHero title={serviceData.title} description={serviceData.description} />
      <ServiceFeatures features={serviceData.features} benefits={serviceData.benefits} />
      <ServiceProcess />
    </main>
  )
}
