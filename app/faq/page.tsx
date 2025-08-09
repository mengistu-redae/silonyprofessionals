import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ - Silony PRO",
  description: "Frequently asked questions about our IT services, support, and solutions.",
}

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Services",
      faqs: [
        {
          question: "What types of IT services does Silony PRO offer?",
          answer:
            "We offer comprehensive IT services including infrastructure deployment, cybersecurity, cloud solutions, network setup, IT consultancy, and 24/7 technical support. Our services are designed for businesses of all sizes across Ethiopia.",
        },
        {
          question: "Do you provide services outside of Addis Ababa?",
          answer:
            "Yes, we provide services throughout Ethiopia. While our main office is in Addis Ababa, we have technicians and partners in major cities and can deploy teams anywhere in the country for infrastructure projects.",
        },
        {
          question: "What industries do you serve?",
          answer:
            "We serve various industries including banking, healthcare, education, manufacturing, government, NGOs, and small to large enterprises. Our solutions are customized to meet specific industry requirements and compliance standards.",
        },
        {
          question: "How do you ensure service quality?",
          answer:
            "We maintain high service quality through certified technicians, partnerships with leading technology vendors, regular training, quality assurance processes, and continuous monitoring of client systems.",
        },
      ],
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "What are your support hours?",
          answer:
            "We offer 24/7 emergency support for critical issues. Regular support is available Monday to Friday, 8:00 AM to 6:00 PM. Emergency support is available outside these hours for system outages and security incidents.",
        },
        {
          question: "How quickly do you respond to support requests?",
          answer:
            "Response times vary by priority level: Critical issues (15 minutes), High priority (1 hour), Medium priority (4 hours), and Low priority (24 hours). Emergency support is available immediately for critical system failures.",
        },
        {
          question: "Do you provide remote support?",
          answer:
            "Yes, we provide secure remote support for many issues including software troubleshooting, configuration changes, and system monitoring. Remote support allows us to resolve issues quickly without on-site visits.",
        },
        {
          question: "What is included in your maintenance contracts?",
          answer:
            "Maintenance contracts include regular system health checks, software updates, security patches, performance monitoring, backup verification, and priority support. Contracts are customized based on your specific infrastructure needs.",
        },
      ],
    },
    {
      title: "Security & Compliance",
      faqs: [
        {
          question: "How do you ensure data security?",
          answer:
            "We implement multi-layered security including firewalls, intrusion detection, encryption, access controls, regular security audits, and compliance with international security standards. All our technicians are trained in security best practices.",
        },
        {
          question: "Do you help with regulatory compliance?",
          answer:
            "Yes, we help organizations comply with various regulations including data protection laws, industry-specific compliance requirements, and international standards. We provide compliance assessments and implementation support.",
        },
        {
          question: "What backup and disaster recovery options do you offer?",
          answer:
            "We offer comprehensive backup solutions including on-site, off-site, and cloud backups. Our disaster recovery services include business continuity planning, system replication, and rapid recovery procedures to minimize downtime.",
        },
        {
          question: "How do you handle security incidents?",
          answer:
            "We have a dedicated incident response team available 24/7. Our process includes immediate containment, forensic analysis, system recovery, and post-incident reporting. We also provide preventive measures to avoid future incidents.",
        },
      ],
    },
    {
      title: "Pricing & Contracts",
      faqs: [
        {
          question: "How do you structure your pricing?",
          answer:
            "Pricing varies based on project scope, complexity, and ongoing support requirements. We offer project-based pricing for implementations and monthly/annual contracts for ongoing support and maintenance services.",
        },
        {
          question: "Do you offer service level agreements (SLAs)?",
          answer:
            "Yes, all our service contracts include detailed SLAs covering response times, uptime guarantees, resolution timeframes, and performance metrics. SLAs are customized based on your business requirements and criticality.",
        },
        {
          question: "What payment terms do you offer?",
          answer:
            "We offer flexible payment terms including upfront payments for projects, monthly billing for ongoing services, and annual contracts with discounts. Payment methods include bank transfers, checks, and electronic payments.",
        },
        {
          question: "Do you provide free consultations?",
          answer:
            "Yes, we offer free initial consultations to assess your IT needs, discuss potential solutions, and provide preliminary recommendations. This helps us understand your requirements and propose the most suitable services.",
        },
      ],
    },
  ]

  const contactOptions = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our support team",
      contact: "+251 90 500 0095",
      href: "tel:+251905000095",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your questions",
      contact: "info@silonypro.com",
      href: "mailto:info@silonypro.com",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our experts",
      contact: "Available on website",
      href: "#",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: "#E5E5E5" }}>
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-6" style={{ color: "#0057A0" }} />
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#333333" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#333333" }}>
            Find answers to common questions about our IT services, support, and solutions.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#0057A0" }}>
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border rounded-lg px-6"
                      style={{ borderColor: "#E5E5E5" }}
                    >
                      <AccordionTrigger className="text-left font-semibold" style={{ color: "#333333" }}>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed pt-4" style={{ color: "#333333" }}>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20" style={{ backgroundColor: "#E5E5E5" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#333333" }}>
              Still Have Questions?
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#333333" }}>
              Can't find the answer you're looking for? Our team is here to help you with any questions or concerns.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <Card key={index} className="border-0 bg-white text-center shadow-lg">
                <CardHeader>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#0057A0" }}
                  >
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle style={{ color: "#333333" }}>{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4" style={{ color: "#333333" }}>
                    {option.description}
                  </p>
                  <p className="font-semibold mb-4" style={{ color: "#0057A0" }}>
                    {option.contact}
                  </p>
                  {option.href !== "#" && (
                    <Button asChild className="w-full" style={{ backgroundColor: "#0057A0", color: "white" }}>
                      <Link href={option.href}>Contact Now</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
