"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"

export function Footer() {
  const footerLinks = {
    services: [
      { name: "Infrastructure Deployment", href: "/services/deployment" },
      { name: "Cybersecurity Services", href: "/services/security" },
      { name: "Cloud Solutions", href: "/services/cloud" },
      { name: "Network Solutions", href: "/services/network" },
      { name: "IT Consultancy", href: "/services/consultancy" },
      { name: "Training & Support", href: "/services/training" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Partners", href: "/partners" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/silonypro" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/silonypro" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/silonypro" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/silonypro" },
  ]

  return (
    <footer style={{ backgroundColor: "#002D56" }} className="text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Image
                src="/silony-logo-blue.png"
                alt="Silony PRO"
                width={200}
                height={62}
                className="h-12 w-auto mb-6"
              />
              <p className="text-base leading-relaxed mb-6" style={{ color: "#E5E5E5" }}>
                Ethiopia's leading provider of enterprise IT solutions. We empower businesses with cutting-edge
                technology infrastructure that drives growth and innovation.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: "#0057A0" }}>
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#0057A0")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ color: "#0057A0" }}>
              Our Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 flex items-center group text-base"
                    style={{ color: "#E5E5E5" }}
                    onMouseEnter={(e) => (e.target.style.color = "#0057A0")}
                    onMouseLeave={(e) => (e.target.style.color = "#E5E5E5")}
                  >
                    <ArrowRight className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ color: "#0057A0" }}>
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 flex items-center group text-base"
                    style={{ color: "#E5E5E5" }}
                    onMouseEnter={(e) => (e.target.style.color = "#0057A0")}
                    onMouseLeave={(e) => (e.target.style.color = "#E5E5E5")}
                  >
                    <ArrowRight className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: "#333333" }}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-base" style={{ color: "#E5E5E5" }}>
                © 2024 Silony PRO. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  href="/privacy"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#E5E5E5" }}
                  onMouseEnter={(e) => (e.target.style.color = "#0057A0")}
                  onMouseLeave={(e) => (e.target.style.color = "#E5E5E5")}
                >
                  Privacy Policy
                </Link>
                <span style={{ color: "#333333" }}>|</span>
                <Link
                  href="/terms"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#E5E5E5" }}
                  onMouseEnter={(e) => (e.target.style.color = "#0057A0")}
                  onMouseLeave={(e) => (e.target.style.color = "#E5E5E5")}
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-base" style={{ color: "#E5E5E5" }}>
                Made with ❤️ in Ethiopia
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: "#0057A0" }}></div>
                <span className="text-base font-medium" style={{ color: "#E5E5E5" }}>
                  System Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
