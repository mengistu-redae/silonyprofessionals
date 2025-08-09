import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Briefcase, Heart, Zap, Target, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers - Join Our Team | Silony PRO",
  description:
    "Join Silony PRO and build your career in IT. Explore exciting opportunities in Ethiopia's leading technology company.",
}

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior Network Engineer",
      department: "Infrastructure",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead network infrastructure projects and mentor junior engineers in enterprise environments.",
      requirements: ["CCNP/CCIE certification", "5+ years enterprise networking", "Project management experience"],
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      experience: "3+ years",
      description: "Implement and maintain security solutions for enterprise clients across various industries.",
      requirements: ["Security certifications (CISSP, CEH)", "Incident response experience", "Risk assessment skills"],
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and implement cloud infrastructure solutions for enterprise clients.",
      requirements: ["AWS/Azure certifications", "Infrastructure as Code", "DevOps experience"],
    },
    {
      title: "IT Support Technician",
      department: "Support",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      experience: "1+ years",
      description: "Provide technical support and maintenance services to our enterprise clients.",
      requirements: ["CompTIA A+ certification", "Windows/Linux administration", "Customer service skills"],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family.",
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Continuous learning opportunities, certifications, and career advancement paths.",
    },
    {
      icon: Target,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and generous vacation policies.",
    },
    {
      icon: Award,
      title: "Competitive Package",
      description: "Attractive salary, performance bonuses, and comprehensive benefits package.",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and encourage creative problem-solving.",
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do and deliver exceptional results.",
    },
    {
      title: "Collaboration",
      description: "We work together as a team, sharing knowledge and supporting each other's growth.",
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl mb-8 opacity-90">
              Build your career with Ethiopia's leading IT solutions provider. We're looking for passionate
              professionals who want to make a difference in the technology landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5" />
                <span>Multiple Departments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#002D56" }}>
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl" style={{ color: "#0057A0" }}>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#002D56" }}>
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive benefits and a supportive work environment that helps you thrive.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* Job Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#002D56" }}>
              Current Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our current job opportunities and find the perfect role for your skills and career goals.
            </p>
          </div>
          <div className="grid gap-8 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2" style={{ color: "#002D56" }}>
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-lg">{job.description}</CardDescription>
                    </div>
                    <Button style={{ backgroundColor: "#0057A0" }} className="hover:bg-blue-700 self-start">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.department}</span>
                    </Badge>
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </Badge>
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.type}</span>
                    </Badge>
                    <Badge variant="secondary">{job.experience}</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: "#002D56" }}>
                      Key Requirements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't see a position that matches your skills? We're always looking for talented individuals. Send us your
            resume and let's discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Send Your Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Contact HR
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
