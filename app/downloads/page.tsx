import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, ImageIcon, Video, Archive } from "lucide-react"

export const metadata: Metadata = {
  title: "Downloads - Silony PRO",
  description: "Download software, drivers, documentation, and other resources.",
}

export default function DownloadsPage() {
  const downloadCategories = [
    {
      icon: FileText,
      title: "Documentation",
      description: "User manuals, technical guides, and installation instructions",
      items: [
        { name: "Network Setup Guide", size: "2.5 MB", type: "PDF", version: "v2.1" },
        { name: "Security Best Practices", size: "1.8 MB", type: "PDF", version: "v1.5" },
        { name: "Backup Configuration Manual", size: "3.2 MB", type: "PDF", version: "v2.0" },
        { name: "System Administration Guide", size: "4.1 MB", type: "PDF", version: "v3.0" },
      ],
    },
    {
      icon: Archive,
      title: "Software & Tools",
      description: "Utilities, monitoring tools, and configuration software",
      items: [
        { name: "Network Monitoring Tool", size: "15.2 MB", type: "EXE", version: "v1.4.2" },
        { name: "System Health Checker", size: "8.7 MB", type: "MSI", version: "v2.1.0" },
        { name: "Configuration Backup Tool", size: "12.3 MB", type: "ZIP", version: "v1.8.1" },
        { name: "Performance Analyzer", size: "22.1 MB", type: "EXE", version: "v3.2.0" },
      ],
    },
    {
      icon: Video,
      title: "Training Videos",
      description: "Step-by-step video tutorials and training materials",
      items: [
        { name: "Infrastructure Setup Basics", size: "125 MB", type: "MP4", version: "2024" },
        { name: "Network Troubleshooting", size: "98 MB", type: "MP4", version: "2024" },
        { name: "Security Configuration", size: "156 MB", type: "MP4", version: "2024" },
        { name: "Backup and Recovery", size: "87 MB", type: "MP4", version: "2024" },
      ],
    },
    {
      icon: ImageIcon,
      title: "Resources",
      description: "Templates, checklists, and reference materials",
      items: [
        { name: "Network Diagram Templates", size: "5.4 MB", type: "ZIP", version: "v1.2" },
        { name: "Security Audit Checklist", size: "890 KB", type: "PDF", version: "v2.0" },
        { name: "Maintenance Schedule Template", size: "1.2 MB", type: "XLSX", version: "v1.1" },
        { name: "Incident Response Playbook", size: "2.8 MB", type: "PDF", version: "v1.3" },
      ],
    },
  ]

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return <FileText className="h-5 w-5" style={{ color: "#DC2626" }} />
      case "mp4":
        return <Video className="h-5 w-5" style={{ color: "#7C3AED" }} />
      case "zip":
      case "exe":
      case "msi":
        return <Archive className="h-5 w-5" style={{ color: "#0057A0" }} />
      default:
        return <FileText className="h-5 w-5" style={{ color: "#333333" }} />
    }
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: "#E5E5E5" }}>
        <div className="container mx-auto px-4 text-center">
          <Download className="h-16 w-16 mx-auto mb-6" style={{ color: "#0057A0" }} />
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#333333" }}>
            Downloads
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#333333" }}>
            Access software, documentation, training materials, and other resources to support your IT infrastructure.
          </p>
        </div>
      </section>

      {/* Download Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {downloadCategories.map((category, index) => (
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
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center justify-between p-4 rounded-lg hover:shadow-md transition-shadow duration-200"
                        style={{ backgroundColor: "#E5E5E5" }}
                      >
                        <div className="flex items-center space-x-3">
                          {getFileIcon(item.type)}
                          <div>
                            <p className="font-medium" style={{ color: "#333333" }}>
                              {item.name}
                            </p>
                            <p className="text-sm" style={{ color: "#333333" }}>
                              {item.type} • {item.size} • {item.version}
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
            Need Help?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#333333" }}>
            If you need assistance with any downloads or have questions about installation and setup, our support team
            is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full"
              style={{ backgroundColor: "#0057A0", color: "white" }}
            >
              <a href="/support">Contact Support</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
              style={{ borderColor: "#0057A0", color: "#0057A0" }}
            >
              <a href="/documentation">View Documentation</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
