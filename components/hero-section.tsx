"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/images/server-infrastructure.png",
      title: "Enterprise Server Infrastructure",
      subtitle: "Robust & Scalable Solutions",
      description:
        "Deploy high-performance server infrastructure that grows with your business needs and ensures maximum uptime.",
    },
    {
      image: "/images/data-center.png",
      title: "Modern Data Center Solutions",
      subtitle: "Secure & Efficient Operations",
      description:
        "State-of-the-art data center facilities with advanced cooling, power management, and security systems.",
    },
    {
      image: "/images/storage-systems.png",
      title: "Advanced Storage Systems",
      subtitle: "Reliable Data Management",
      description:
        "Enterprise-grade storage solutions with backup and disaster recovery capabilities for your critical data.",
    },
    {
      image: "/images/cloud-infrastructure.png",
      title: "Hybrid Cloud Infrastructure",
      subtitle: "Flexible & Future-Ready",
      description: "Seamlessly integrate on-premises and cloud resources for optimal performance and cost efficiency.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{slides[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold" style={{ color: "#E5E5E5" }}>
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto" style={{ color: "#E5E5E5" }}>
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#0057A0", color: "white" }}
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-200 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
