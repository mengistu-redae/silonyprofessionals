"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Users, Target, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function AboutHero() {
  const highlights = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional creative solutions",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building Africa's largest creative professional network",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Focused on measurable creative and business outcomes",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering the future of creative collaboration",
    },
  ]

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" className="mb-4 text-silony-primary border-silony-primary">
              About Silony
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground leading-tight">
              Empowering Africa's
              <span className="text-silony-primary"> Creative Renaissance</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Silony Creative Network was founded with a vision to transform how creative professionals across Africa
              connect, collaborate, and create. We're building the continent's premier platform for artistic innovation
              and professional growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild className="bg-silony-primary hover:bg-silony-dark">
                <Link href="/contact">
                  Join Our Network
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/portfolio">View Success Stories</Link>
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-silony-primary mb-2">10K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Creative Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-silony-primary mb-2">25+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">African Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-silony-primary mb-2">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Successful Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="neumorphic hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-silony-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-silony-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
