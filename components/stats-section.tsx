"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { number: 150, suffix: "+", label: "Projects Completed", color: "text-silony-primary" },
    { number: 40, suffix: "+", label: "Happy Clients", color: "text-green-500" },
    { number: 10000, suffix: "+", label: "Training Hours Delivered", color: "text-blue-500" },
    { number: 5, suffix: "+", label: "Years of Experience", color: "text-purple-500" },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-silony-primary">Our Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="neumorphic rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                <AnimatedCounter
                  target={stat.number}
                  isInView={isInView}
                  className={`text-4xl md:text-5xl font-bold ${stat.color} glow`}
                  suffix={stat.suffix}
                />
                <p className="text-muted-foreground mt-4 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({
  target,
  isInView,
  className,
  suffix = "",
}: {
  target: number
  isInView: boolean
  className: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
