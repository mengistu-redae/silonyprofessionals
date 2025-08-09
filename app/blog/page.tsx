import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata: Metadata = {
  title: "Blog - Silony Professional IT Services",
  description:
    "Stay updated with the latest insights, trends, and best practices in IT infrastructure and enterprise technology.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-16">
      <BlogHero />
      <BlogGrid />
    </main>
  )
}
