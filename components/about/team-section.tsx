"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function TeamSection() {
  const team = [
    {
      name: "Dawit Mekonnen",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 10+ years in IT strategy and business development.",
      image: "/placeholder-user.jpg",
      linkedin: "#",
      email: "dawit@silony.com",
    },
    {
      name: "Sara Tadesse",
      role: "Chief Technology Officer",
      bio: "Technology expert specializing in enterprise solutions and cloud architecture.",
      image: "/placeholder-user.jpg",
      linkedin: "#",
      email: "sara@silony.com",
    },
    {
      name: "Michael Haile",
      role: "Head of Operations",
      bio: "Operations specialist ensuring seamless project delivery and client satisfaction.",
      image: "/placeholder-user.jpg",
      linkedin: "#",
      email: "michael@silony.com",
    },
    {
      name: "Hanan Ahmed",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in modern web technologies and mobile apps.",
      image: "/placeholder-user.jpg",
      linkedin: "#",
      email: "hanan@silony.com",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-silony-primary border-silony-primary">
            Our Team
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Meet the Experts Behind Silony</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of professionals brings together decades of experience in technology, business strategy,
            and client service to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="neumorphic hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-silony-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="neumorphic max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Team</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals who share our passion for technology and innovation.
              </p>
              <Button className="bg-silony-primary hover:bg-silony-dark">View Open Positions</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
