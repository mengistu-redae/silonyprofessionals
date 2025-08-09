"use client"

import { motion } from "framer-motion"

export function PortfolioHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-silony-primary to-silony-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Discover our successful IT infrastructure projects and the impact we've made for businesses across various
            industries.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
