"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Globe, Users, Zap, Shield, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export function ValuesSection() {
  const values = [
    {
      icon: Palette,
      title: "Authenticity",
      description: "We celebrate unique African perspectives and authentic creative expression.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe great creativity emerges from meaningful connections and partnerships.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technology to enhance creative possibilities.",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "We welcome creators from all backgrounds, disciplines, and experience levels.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We maintain high standards while supporting continuous learning and growth.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency, respect, and ethical business practices.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-silony-orange/10 text-silony-orange border-silony-orange/20 mb-4">Core Values</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">What Drives Us Forward</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our values shape every decision we make and every feature we build for the creative community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-silony-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-silony-primary/20 transition-colors duration-300">
                    <value.icon className="h-6 w-6 text-silony-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
