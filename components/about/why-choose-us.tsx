"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Award, Users, Headphones, TrendingUp, CheckCircle, Star } from "lucide-react"
import { motion } from "framer-motion"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Proven Expertise",
      description:
        "Years of experience delivering successful IT projects across various industries and business sizes.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We understand the importance of deadlines and consistently deliver projects on time and within budget.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure reliable, high-performance solutions.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description:
        "Skilled professionals committed to understanding your business needs and delivering tailored solutions.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your systems run smoothly without interruption.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Future-ready solutions that grow with your business and adapt to changing requirements.",
    },
  ]

  const achievements = [
    { number: "50+", label: "Successful Projects" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-silony-primary border-silony-primary">
            Why Choose Silony
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Your Trusted IT Partner</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical excellence with business understanding to deliver solutions that drive real results.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <Card key={index} className="neumorphic text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-silony-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="neumorphic hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-silony-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <reason.icon className="h-6 w-6 text-silony-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="neumorphic max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-muted-foreground italic mb-6">
                "Silony transformed our entire IT infrastructure. Their expertise, professionalism, and ongoing support
                have been instrumental in our business growth. Highly recommended!"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-silony-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-silony-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Verified Client</div>
                  <div className="text-sm text-muted-foreground">Enterprise Customer</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
