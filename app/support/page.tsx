import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, Clock, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Support Center - Silony PRO",
  description: "Get technical support and assistance for all your IT infrastructure needs.",
}

export default function SupportPage() {
  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      contact: "+251 90 500 0095",
      availability: "24/7 Emergency Support",
      href: "tel:+251905000095",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed information about your issue",
      contact: "support@silonypro.com",
      availability: "Response within 4 hours",
      href: "mailto:support@silonypro.com",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help through our chat system",
      contact: "Available on website",
      availability: "Mon-Fri: 8AM-6PM",
      href: "#",
    },
  ]

  const supportLevels = [
    {
      level: "Critical",
      icon: AlertCircle,
      color: "#DC2626",
      responseTime: "15 minutes",
      description: "System down, critical business impact",
      examples: ["Complete system outage", "Security breach", "Data loss"],
    },
    {
      level: "High",
      icon: AlertCircle,
      color: "#EA580C",
      responseTime: "1 hour",
      description: "Significant business impact",
      examples: ["Major functionality issues", "Performance problems", "Network connectivity issues"],
    },
    {
      level: "Medium",
      icon: Clock,
      color: "#0057A0",
      responseTime: "4 hours",
      description: "Moderate business impact",
      examples: ["Minor functionality issues", "Configuration questions", "Software updates"],
    },
    {
      level: "Low",
      icon: CheckCircle,
      color: "#16A34A",
      responseTime: "24 hours",
      description: "Minimal business impact",
      examples: ["General questions", "Feature requests", "Documentation"],
    },
  ]

  const commonIssues = [
    {
      category: "Network Issues",
      issues: [
        "Slow internet connection",
        "WiFi connectivity problems",
        "VPN connection issues",
        "Network printer problems",
      ],
    },
    {
      category: "Server Issues",
      issues: ["Server performance problems", "Application crashes", "Database connectivity", "Backup failures"],
    },
    {
      category: "Security Issues",
      issues: ["Suspected malware", "Firewall configuration", "User access problems", "Security policy questions"],
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: "#E5E5E5" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#333333" }}>
            Support Center
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#333333" }}>
            Get the technical support you need, when you need it. Our expert team is here to help 24/7.
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "#333333" }}>
            How to Reach Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#0057A0" }}
                  >
                    <channel.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle style={{ color: "#333333" }}>{channel.title}</CardTitle>
                  <CardDescription style={{ color: "#333333" }}>{channel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2" style={{ color: "#0057A0" }}>
                    {channel.contact}
                  </p>
                  <p className="text-sm mb-4" style={{ color: "#333333" }}>
                    {channel.availability}
                  </p>
                  {channel.href !== "#" && (
                    <Button asChild className="w-full" style={{ backgroundColor: "#0057A0", color: "white" }}>
                      <Link href={channel.href}>Contact Now</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20" style={{ backgroundColor: "#E5E5E5" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "#333333" }}>
            Support Priority Levels
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportLevels.map((level, index) => (
              <Card key={index} className="border-0 bg-white">
                <CardHeader className="text-center">
                  <level.icon className="h-8 w-8 mx-auto mb-2" style={{ color: level.color }} />
                  <CardTitle style={{ color: level.color }}>{level.level}</CardTitle>
                  <CardDescription className="font-semibold" style={{ color: "#333333" }}>
                    Response: {level.responseTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4" style={{ color: "#333333" }}>
                    {level.description}
                  </p>
                  <div>
                    <p className="text-xs font-semibold mb-2" style={{ color: "#333333" }}>
                      Examples:
                    </p>
                    <ul className="text-xs space-y-1" style={{ color: "#333333" }}>
                      {level.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "#333333" }}>
            Common Issues & Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {commonIssues.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle style={{ color: "#0057A0" }}>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.issues.map((issue, issueIndex) => (
                      <li key={issueIndex} className="flex items-center text-sm" style={{ color: "#333333" }}>
                        <div
                          className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                          style={{ backgroundColor: "#0057A0" }}
                        ></div>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20" style={{ backgroundColor: "#002D56" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Emergency Support</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#E5E5E5" }}>
            For critical system outages or security incidents, contact our emergency support line immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full"
              style={{ backgroundColor: "#0057A0", color: "white" }}
            >
              <Link href="tel:+251905000095">Call Emergency Line</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="mailto:emergency@silonypro.com">Email Emergency</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
