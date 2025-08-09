"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Server, Shield, Cloud, Network, Wrench, Users, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Server,
      title: "Infrastructure Deployment",
      description: "Complete IT infrastructure setup and deployment services for enterprises.",
      features: ["Server Installation", "Network Setup", "Hardware Configuration", "System Integration"],
      href: "/services/deployment",
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your business from cyber threats.",
      features: ["Security Audits", "Firewall Management", "Threat Detection", "Compliance Support"],
      href: "/services/security",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Migrate to the cloud with our expert guidance and ongoing support.",
      features: ["Cloud Migration", "Hybrid Solutions", "Data Backup", "Disaster Recovery"],
      href: "/services/cloud",
    },
    {
      icon: Network,
      title: "Network Solutions",
      description: "Design and implement robust network infrastructure for optimal performance.",
      features: ["Network Design", "WiFi Solutions", "VPN Setup", "Performance Optimization"],
      href: "/services/network",
    },
    {
      icon: Wrench,
      title: "IT Consultancy",
      description: "Strategic IT consulting to align technology with your business goals.",
      features: ["IT Strategy", "Technology Planning", "Digital Transformation", "Process Optimization"],
      href: "/services/consultancy",
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Comprehensive training and ongoing support for your IT systems.",
      features: ["Staff Training", "24/7 Support", "System Maintenance", "Technical Documentation"],
      href: "/services/training",
    },
  ]

  return (
    <section className="py-20" style={{ backgroundColor: "#E5E5E5" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#333333" }}>
            Our Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#333333" }}>
            Comprehensive IT solutions designed to empower your business with cutting-edge technology and expert
            support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#0057A0" }}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold" style={{ color: "#333333" }}>
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base" style={{ color: "#333333" }}>
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm" style={{ color: "#333333" }}>
                      <Check className="h-4 w-4 mr-3 flex-shrink-0" style={{ color: "#0057A0" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full group/btn" style={{ backgroundColor: "#0057A0", color: "white" }}>
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="px-8 py-4 text-lg font-semibold rounded-full"
            style={{ backgroundColor: "#002D56", color: "white" }}
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
