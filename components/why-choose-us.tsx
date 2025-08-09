"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Shield, Zap, MapPin } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Over 10 years of experience delivering enterprise IT solutions across Ethiopia.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with deep knowledge in modern IT infrastructure and security.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your systems run smoothly at all times.",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Advanced security measures and best practices to protect your valuable business data.",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Quick deployment and implementation with minimal disruption to your business operations.",
    },
    {
      icon: MapPin,
      title: "Local Partnership",
      description: "Based in Ethiopia, we understand local business needs and provide personalized service.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#333333" }}>
            Why Choose Silony PRO?
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#333333" }}>
            We combine technical expertise with local knowledge to deliver IT solutions that drive your business
            forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0"
              style={{ backgroundColor: "#E5E5E5" }}
            >
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#0057A0" }}
                >
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#333333" }}>
                  {reason.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#333333" }}>
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
