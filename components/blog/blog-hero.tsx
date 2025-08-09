"use client"

import { motion } from "framer-motion"

export function BlogHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-silony-primary to-silony-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Stay informed with the latest insights, trends, and best practices in enterprise IT infrastructure and
            technology solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
