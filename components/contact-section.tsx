"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. We'll get back to you within 2 hours.",
        })
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+251 90 500 0095", "Mon-Fri 8AM-6PM EAT"],
      color: "text-silony-orange",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@silony.com", "We reply within 2 hours"],
      color: "text-silony-secondary",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Addis Ababa, Ethiopia", "Bole Sub City, Woreda 03"],
      color: "text-silony-primary",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      color: "text-green-500",
    },
  ]

  const services = [
    "Infrastructure Deployment",
    "IT Consultancy",
    "Training Services",
    "System Integration",
    "Cloud Solutions",
    "Cybersecurity",
    "Other",
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-silony-orange/10 text-silony-orange border-silony-orange/20 mb-4">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your IT infrastructure needs. Our experts are ready to design a solution that scales with your
            business and drives growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <Send className="h-6 w-6 text-silony-orange mr-3" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-silony-primary focus:ring-silony-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-silony-primary focus:ring-silony-primary"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-silony-primary focus:ring-silony-primary"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-silony-primary focus:ring-silony-primary"
                      placeholder="+251 90 500 0095"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-silony-primary focus:border-silony-primary"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-silony-primary focus:ring-silony-primary"
                    placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-silony-orange hover:bg-silony-orange/90 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Start a Conversation</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-l-4 border-l-silony-orange shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-gray-100 ${info.color}`}>
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <Card className="bg-silony-primary text-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Silony?</h3>
                <div className="space-y-4">
                  {[
                    "Expert team with 15+ years of experience",
                    "24/7 dedicated support and monitoring",
                    "Customized solutions for your business",
                    "Proven track record with 500+ clients",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-silony-orange flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
