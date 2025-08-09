"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogGrid() {
  const blogPosts = [
    {
      title: "The Future of Cloud Infrastructure in Enterprise Environments",
      excerpt:
        "Explore the latest trends and technologies shaping the future of cloud infrastructure for enterprise organizations.",
      author: "John Doe",
      date: "December 15, 2024",
      category: "Cloud Computing",
      image: "/placeholder.svg?height=300&width=400",
      slug: "future-cloud-infrastructure",
    },
    {
      title: "Best Practices for IT Infrastructure Security",
      excerpt:
        "Learn essential security practices to protect your IT infrastructure from modern cyber threats and vulnerabilities.",
      author: "Jane Smith",
      date: "December 10, 2024",
      category: "Security",
      image: "/placeholder.svg?height=300&width=400",
      slug: "infrastructure-security-practices",
    },
    {
      title: "Digital Transformation Strategies for Ethiopian Businesses",
      excerpt:
        "Discover how Ethiopian businesses can leverage digital transformation to improve efficiency and competitiveness.",
      author: "Mike Johnson",
      date: "December 5, 2024",
      category: "Digital Transformation",
      image: "/placeholder.svg?height=300&width=400",
      slug: "digital-transformation-ethiopia",
    },
    {
      title: "Optimizing Server Performance for Maximum Efficiency",
      excerpt:
        "Tips and techniques for optimizing server performance to ensure maximum efficiency and minimal downtime.",
      author: "Sarah Wilson",
      date: "November 28, 2024",
      category: "Performance",
      image: "/placeholder.svg?height=300&width=400",
      slug: "server-performance-optimization",
    },
    {
      title: "The Role of AI in Modern IT Infrastructure Management",
      excerpt: "How artificial intelligence is revolutionizing IT infrastructure management and operations.",
      author: "David Brown",
      date: "November 20, 2024",
      category: "Artificial Intelligence",
      image: "/placeholder.svg?height=300&width=400",
      slug: "ai-infrastructure-management",
    },
    {
      title: "Building Resilient IT Systems for Business Continuity",
      excerpt:
        "Essential strategies for building resilient IT systems that ensure business continuity during disruptions.",
      author: "Lisa Chen",
      date: "November 15, 2024",
      category: "Business Continuity",
      image: "/placeholder.svg?height=300&width=400",
      slug: "resilient-it-systems",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="neumorphic rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-silony-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-silony-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-silony-primary group-hover:text-white group-hover:border-silony-primary transition-all duration-300 bg-transparent"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
