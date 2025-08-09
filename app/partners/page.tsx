import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Globe, Award, Handshake, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Partners - Technology Partnerships | Silony PRO",
  description:
    "Discover our strategic technology partnerships that enable us to deliver world-class IT solutions to our clients.",
}

export default function PartnersPage() {
  const partners = [
    {
      name: "Microsoft",
      logo: "/placeholder.svg?height=80&width=200&text=Microsoft",
      category: "Cloud & Productivity",
      description: "Gold Partner providing Azure cloud solutions and Microsoft 365 services.",
      certifications: ["Azure Solutions Architect", "Microsoft 365 Certified"],
    },
    {
      name: "Cisco",
      logo: "/placeholder.svg?height=80&width=200&text=Cisco",
      category: "Networking",
      description: "Premier Partner delivering enterprise networking and security solutions.",
      certifications: ["Cisco Select Partner", "Security Specialized"],
    },
    {
      name: "VMware",
      logo: "/placeholder.svg?height=80&width=200&text=VMware",
      category: "Virtualization",
      description: "Solution Provider Partner for virtualization and cloud infrastructure.",
      certifications: ["VCP Certified", "vSAN Specialist"],
    },
    {
      name: "Dell Technologies",
      logo: "/placeholder.svg?height=80&width=200&text=Dell",
      category: "Hardware",
      description: "Authorized Partner for servers, storage, and infrastructure solutions.",
      certifications: ["Dell EMC Proven Professional", "PowerEdge Specialist"],
    },
    {
      name: "HPE",
      logo: "/placeholder.svg?height=80&width=200&text=HPE",
      category: "Infrastructure",
      description: "Silver Partner providing enterprise infrastructure and hybrid cloud solutions.",
      certifications: ["HPE ASE", "Hybrid Cloud Specialist"],
    },
    {
      name: "Fortinet",
      logo: "/placeholder.svg?height=80&width=200&text=Fortinet",
      category: "Cybersecurity",
      description: "Expert Partner delivering advanced cybersecurity solutions.",
      certifications: ["NSE Certified", "Security Fabric Specialist"],
    },
  ]

  const partnerBenefits = [
    {
      icon: CheckCircle,
      title: "Certified Expertise",
      description: "Our team holds industry-leading certifications from all major technology vendors.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Recognized achievements and awards from our technology partners.",
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "Access to worldwide support networks and resources through our partnerships.",
    },
    {
      icon: Target,
      title: "Latest Technologies",
      description: "Early access to cutting-edge solutions and emerging technologies.",
    },
  ]

  const partnershipLevels = [
    {
      level: "Technology Partner",
      description: "Collaborate with us to deliver innovative solutions to mutual clients.",
      benefits: ["Joint go-to-market strategies", "Technical collaboration", "Shared resources"],
    },
    {
      level: "Solution Partner",
      description: "Integrate your solutions with our service offerings for enhanced value.",
      benefits: ["Solution integration", "Joint proposals", "Technical support"],
    },
    {
      level: "Channel Partner",
      description: "Expand your reach through our established client base and market presence.",
      benefits: ["Market expansion", "Lead sharing", "Sales collaboration"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Technology Partners</h1>
            <p className="text-xl mb-8 opacity-90">
              We collaborate with industry-leading technology vendors to deliver world-class solutions that meet the
              evolving needs of our clients across Ethiopia and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <Handshake className="h-5 w-5" />
                <span>15+ Strategic Partners</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>50+ Certifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Certified Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#002D56" }}>
              Partnership Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our strategic partnerships enable us to deliver superior value and cutting-edge solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div
                    className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#0057A0" }}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl" style={{ color: "#002D56" }}>
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#002D56" }}>
              Our Technology Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain strategic partnerships with leading technology vendors to ensure our clients receive the best
              solutions available in the market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="mb-4">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={200}
                      height={80}
                      className="mx-auto h-16 w-auto object-contain"
                    />
                  </div>
                  <Badge className="mb-2" style={{ backgroundColor: "#0057A0" }}>
                    {partner.category}
                  </Badge>
                  <CardTitle className="text-xl" style={{ color: "#002D56" }}>
                    {partner.name}
                  </CardTitle>
                  <CardDescription className="text-base">{partner.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: "#002D56" }}>
                      Certifications:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#002D56" }}>
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore different ways to partner with Silony PRO and expand your business reach.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnershipLevels.map((partnership, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-2" style={{ color: "#0057A0" }}>
                    {partnership.level}
                  </CardTitle>
                  <CardDescription className="text-base">{partnership.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3" style={{ color: "#002D56" }}>
                    Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnering with Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our network of technology partners and unlock new opportunities for growth and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Become a Partner
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Contact Partnership Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
