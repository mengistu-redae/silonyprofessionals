import type { Metadata } from "next"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { ProjectsGrid } from "@/components/portfolio/projects-grid"

export const metadata: Metadata = {
  title: "Portfolio - Silony Professional IT Services",
  description: "Explore our portfolio of successful IT infrastructure projects and client success stories.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-16">
      <PortfolioHero />
      <ProjectsGrid />
    </main>
  )
}
