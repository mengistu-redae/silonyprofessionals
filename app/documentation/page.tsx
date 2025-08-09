import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Book, Video, Code, Settings } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Documentation - Silony PRO",
  description: "Access technical documentation, guides, and resources for all our IT solutions and services.",
}

export default function DocumentationPage() {
  const documentCategories = [
    {
      icon: Settings,
      title: "Infrastructure Setup",
      description: "Complete guides for setting up and configuring IT infrastructure",
      documents: [
        { name: "Server Installation Guide", type: "PDF", size: "2.5 MB" },
        { name: "Network Configuration Manual", type: "PDF", size: "3.1 MB" },
        { name: "Storage Setup Guide", type: "PDF", size: "1.8 MB" },
        { name: "Backup Configuration", type: "PDF", size: "1.2 MB" },
      ],
    },
    {
      icon: Book,
      title: "User Manuals",
      description: "Step-by-step user guides for various systems and applications",
      documents: [
        { name: "Email System User Guide", type: "PDF", size: "1.5 MB" },
        { name: "VPN Access Manual", type: "PDF", size: "800 KB" },
        { name: "File Sharing Guide", type: "PDF", size: "1.1 MB" },
        { name: "Security Best Practices", type: "PDF", size: "2.0 MB" },
      ],
    },
    {
      icon: Code,
      title: "Technical Specifications",
      description: "Detailed technical specifications and requirements",
      documents: [
        { name: "Hardware Requirements", type: "PDF", size: "1.3 MB" },
        { name: "Software Compatibility", type: "PDF", size: "900 KB" },
        { name: "Network Architecture", type: "PDF", size: "2.8 MB" },
        { name: "Security Protocols", type: "PDF", size: "1.7 MB" },
      ],
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Visual guides and training videos for common tasks",
      documents: [
        { name: "System Administration Basics", type: "MP4", size: "45 MB" },
        { name: "Network Troubleshooting", type: "MP4", size: "38 MB" },
        { name: "Security Configuration", type: "MP4", size: "52 MB" },
        { name: "Backup and Recovery", type: "MP4", size: "41 MB" },
      ],
    },
  ]

  const quickLinks = [
    { name: "Getting Started Guide", href: "#", icon: FileText },
    { name: "FAQ", href: "/faq", icon: FileText },
    { name: "Support Center", href: "/support", icon: FileText },
    { name: "Contact Technical Team", href: "/contact", icon: FileText },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: "#E5E5E5" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#333333" }}>
            Documentation
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#333333" }}>
            Access comprehensive technical documentation, user guides, and resources for all our IT solutions and
            services.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                className="flex items-center space-x-2 bg-transparent"
                style={{ borderColor: "#0057A0", color: "#0057A0" }}
              >
                <Link href={link.href}>
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {documentCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#0057A0" }}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle style={{ color: "#333333" }}>{category.title}</CardTitle>
                      <CardDescription style={{ color: "#333333" }}>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.documents.map((doc, docIndex) => (
                      <div
                        key={docIndex}
                        className="flex items-center justify-between p-4 rounded-lg hover:shadow-md transition-shadow duration-200"
                        style={{ backgroundColor: "#E5E5E5" }}
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5" style={{ color: "#0057A0" }} />
                          <div>
                            <p className="font-medium" style={{ color: "#333333" }}>
                              {doc.name}
                            </p>
                            <p className="text-sm" style={{ color: "#333333" }}>
                              {doc.type} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="flex items-center space-x-2"
                          style={{ backgroundColor: "#0057A0", color: "white" }}
                        >
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20" style={{ backgroundColor: "#E5E5E5" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#333333" }}>
            Need Additional Help?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#333333" }}>
            Can't find what you're looking for? Our technical team is ready to assist you with any questions or custom
            documentation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full"
              style={{ backgroundColor: "#0057A0", color: "white" }}
            >
              <Link href="/support">Contact Support</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
              style={{ borderColor: "#0057A0", color: "#0057A0" }}
            >
              <Link href="/contact">Request Custom Documentation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
