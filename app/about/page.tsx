import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { MissionVision } from "@/components/about/mission-vision"
import { TeamSection } from "@/components/about/team-section"
import { ValuesSection } from "@/components/about/values-section"
import { StatsSection } from "@/components/stats-section"

export const metadata: Metadata = {
  title: "About Us - Silony Creative Network",
  description:
    "Learn about Silony's mission to revolutionize creative collaboration across Africa. Meet our team and discover our values.",
  keywords: "about silony, creative network, team, mission, values, Africa, innovation",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <StatsSection />
      <TeamSection />
    </>
  )
}
