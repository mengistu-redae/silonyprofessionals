"use client"

import { motion } from "framer-motion"
import { Search, PlaneTakeoff, Settings, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Assessment",
      description: "We analyze your current infrastructure and identify areas for improvement.",
    },
    {
      icon: PlaneTakeoff,
      title: "Planning",
      description: "We develop a comprehensive strategy tailored to your business needs.",
    },
    {
      icon: Settings,
      title: "Implementation",
      description: "Our experts execute the plan with precision and minimal disruption.",
    },
    {
      icon: CheckCircle,
      title: "Support",
      description: "We provide ongoing support and maintenance to ensure optimal performance.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-silony-primary">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery and client satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="w-16 h-16 bg-silony-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                {index + 1}
              </div>
              <div className="w-12 h-12 bg-silony-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-6 w-6 text-silony-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-silony-primary/20 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
