import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, XCircle, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "System Status - Silony PRO",
  description: "Real-time status of our systems and services.",
}

export default function StatusPage() {
  const systemStatus = [
    {
      name: "Primary Data Center",
      status: "operational",
      uptime: "99.98%",
      lastIncident: "None in last 30 days",
    },
    {
      name: "Backup Data Center",
      status: "operational",
      uptime: "99.95%",
      lastIncident: "None in last 30 days",
    },
    {
      name: "Network Infrastructure",
      status: "operational",
      uptime: "99.97%",
      lastIncident: "None in last 30 days",
    },
    {
      name: "Cloud Services",
      status: "operational",
      uptime: "99.99%",
      lastIncident: "None in last 30 days",
    },
    {
      name: "Email Systems",
      status: "operational",
      uptime: "99.96%",
      lastIncident: "None in last 30 days",
    },
    {
      name: "Support Portal",
      status: "operational",
      uptime: "99.94%",
      lastIncident: "None in last 30 days",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "degraded":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case "outage":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "maintenance":
        return <Clock className="h-5 w-5 text-blue-500" />
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      operational: "bg-green-100 text-green-800",
      degraded: "bg-yellow-100 text-yellow-800",
      outage: "bg-red-100 text-red-800",
      maintenance: "bg-blue-100 text-blue-800",
    }

    return (
      <Badge className={variants[status as keyof typeof variants] || variants.operational}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: "#E5E5E5" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold" style={{ color: "#333333" }}>
              All Systems Operational
            </h1>
          </div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#333333" }}>
            Real-time status of our infrastructure and services. Last updated: {new Date().toLocaleString()}
          </p>
        </div>
      </section>

      {/* System Status */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "#333333" }}>
            System Status
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {systemStatus.map((system, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(system.status)}
                      <div>
                        <h3 className="text-lg font-semibold" style={{ color: "#333333" }}>
                          {system.name}
                        </h3>
                        <p className="text-sm" style={{ color: "#333333" }}>
                          Uptime: {system.uptime} | {system.lastIncident}
                        </p>
                      </div>
                    </div>
                    {getStatusBadge(system.status)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-20" style={{ backgroundColor: "#E5E5E5" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "#333333" }}>
            Recent Incident History
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: "#333333" }}>
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  No Recent Incidents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: "#333333" }}>
                  All systems have been running smoothly with no reported incidents in the last 30 days. Our
                  infrastructure maintains high availability and reliability standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
