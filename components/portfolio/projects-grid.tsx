"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsGrid() {
  const projects = [
    {
      title: "Enterprise Cloud Migration",
      client: "TechCorp Ethiopia",
      description:
        "Complete migration of legacy systems to cloud infrastructure, improving performance by 300% and reducing operational costs by 40%.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Cloud Migration",
      date: "2024",
      teamSize: "8 specialists",
    },
    {
      title: "Banking Infrastructure Overhaul",
      client: "National Bank of Ethiopia",
      description:
        "Comprehensive infrastructure upgrade ensuring 99.9% uptime and enhanced security compliance for critical banking operations.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Infrastructure",
      date: "2023",
      teamSize: "12 specialists",
    },
    {
      title: "Healthcare System Integration",
      client: "Addis Ababa Medical Center",
      description:
        "Integration of multiple healthcare systems into a unified platform, improving patient care and operational efficiency.",
      image: "/placeholder.svg?height=300&width=400",
      category: "System Integration",
      date: "2023",
      teamSize: "6 specialists",
    },
    {
      title: "Manufacturing ERP Deployment",
      client: "Ethiopian Manufacturing Corp",
      description:
        "Deployment of enterprise resource planning system with custom integrations for manufacturing processes.",
      image: "/placeholder.svg?height=300&width=400",
      category: "ERP Deployment",
      date: "2024",
      teamSize: "10 specialists",
    },
    {
      title: "Educational Platform Infrastructure",
      client: "Addis Ababa University",
      description: "Built scalable infrastructure to support online learning platform serving 50,000+ students.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Education Technology",
      date: "2023",
      teamSize: "7 specialists",
    },
    {
      title: "Government Digital Transformation",
      client: "Ministry of Technology",
      description: "Digital transformation initiative modernizing government services and improving citizen access.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Digital Transformation",
      date: "2024",
      teamSize: "15 specialists",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-silony-primary">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of our most impactful projects and see how we've helped organizations transform their IT
            infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="neumorphic rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-silony-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-silony-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-silony-primary font-medium mb-3">{project.client}</p>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {project.teamSize}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-silony-primary group-hover:text-white group-hover:border-silony-primary transition-all duration-300 bg-transparent"
                >
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
