"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alemayehu Tadesse",
      position: "IT Director",
      company: "Ethiopian Airlines",
      content:
        "Silony Professionals delivered exceptional server infrastructure solutions that transformed our operations. Their expertise in enterprise-level deployments is unmatched in Ethiopia.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Sara Mohammed",
      position: "CTO",
      company: "Commercial Bank of Ethiopia",
      content:
        "The data center solutions provided by Silony have significantly improved our system reliability and performance. Their team's professionalism and technical knowledge are outstanding.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Daniel Bekele",
      position: "Operations Manager",
      company: "Ethio Telecom",
      content:
        "Working with Silony Professionals on our network infrastructure upgrade was seamless. They delivered on time and exceeded our expectations in terms of quality and support.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Hanan Ahmed",
      position: "IT Manager",
      company: "Awash Bank",
      content:
        "Silony's cybersecurity implementation has given us peace of mind. Their comprehensive approach to security and ongoing support make them our trusted IT partner.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across Ethiopia for reliable IT solutions and exceptional service delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gray-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-blue-700 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
