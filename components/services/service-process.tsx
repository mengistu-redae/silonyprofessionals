"use client"

import { motion } from "framer-motion"
import { Search, FileText, Settings, CheckCircle } from "lucide-react"

export function ServiceProcess() {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Assessment",
      description: "We conduct a thorough analysis of your current infrastructure and requirements.",
    },
    {
      icon: FileText,
      title: "Planning & Design",
      description: "We create detailed implementation plans and system designs tailored to your needs.",
    },
    {
      icon: Settings,
      title: "Implementation",
      description: "Our experts execute the deployment with minimal disruption to your operations.",
    },
    {
      icon: CheckCircle,
      title: "Testing & Handover",
      description: "We thoroughly test all systems and provide comprehensive documentation and training.",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-silony-primary">Our Implementation Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach that ensures successful deployment and optimal results.
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
              className="text-center"
            >
              <div className="w-16 h-16 bg-silony-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                {index + 1}
              </div>
              <div className="w-12 h-12 bg-silony-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-6 w-6 text-silony-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
