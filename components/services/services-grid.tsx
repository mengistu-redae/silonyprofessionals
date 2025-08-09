"use client"

import { motion } from "framer-motion"
import { Settings, Users, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesGrid() {
  const services = [
    {
      icon: Settings,
      title: "Deployment & Implementation Services",
      description: "Professional deployment and implementation of enterprise IT infrastructure solutions",
      features: ["Server Deployment", "Cloud Migration", "System Integration", "Performance Optimization"],
      href: "/services/deployment",
    },
    {
      icon: Users,
      title: "IT Infrastructure Consultancy",
      description: "Expert guidance and strategic planning for your IT infrastructure needs",
      features: ["Infrastructure Assessment", "Strategic Planning", "Risk Analysis", "Compliance Auditing"],
      href: "/services/consultancy",
    },
    {
      icon: BookOpen,
      title: "Training & Education",
      description: "Comprehensive training programs to empower your team with essential IT skills",
      features: ["Technical Training", "Certification Preparation", "Custom Workshops", "Ongoing Support"],
      href: "/services/training",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="neumorphic rounded-2xl p-8 group cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-silony-primary/10 rounded-2xl mb-6 group-hover:bg-silony-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-8 w-8 text-silony-primary group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-silony-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-silony-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={service.href}>
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-silony-primary group-hover:text-white transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
