"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function MissionVision() {
  const sections = [
    {
      icon: Target,
      title: "Our Mission",
      badge: "Purpose",
      content:
        "To democratize creative collaboration across Africa by providing a platform where artists, designers, and innovators can connect, share resources, and create impactful projects that drive cultural and economic growth.",
      color: "text-silony-orange",
      bgColor: "bg-silony-orange/10",
    },
    {
      icon: Eye,
      title: "Our Vision",
      badge: "Future",
      content:
        "To become Africa's leading creative network, fostering a renaissance of artistic innovation that positions the continent as a global hub for creative excellence and cultural expression.",
      color: "text-silony-secondary",
      bgColor: "bg-silony-secondary/10",
    },
    {
      icon: Heart,
      title: "Our Values",
      badge: "Principles",
      content:
        "We believe in authenticity, collaboration, innovation, and inclusivity. Our platform celebrates African creativity while embracing global standards of excellence and professional growth.",
      color: "text-silony-primary",
      bgColor: "bg-silony-primary/10",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-silony-primary/10 text-silony-primary border-silony-primary/20 mb-4">
            Our Foundation
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built on Purpose, Driven by Vision
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything we do is guided by our commitment to empowering African creativity and fostering meaningful
            connections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${section.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <section.icon className={`h-8 w-8 ${section.color}`} aria-hidden="true" />
                  </div>
                  <Badge variant="outline" className={`${section.color} border-current mb-4`}>
                    {section.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
