"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-32">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-8xl sm:text-9xl font-bold text-silony-primary">404</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground text-lg">
            The creative page you're looking for doesn't exist or has been moved to a new location.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-silony-primary hover:bg-silony-dark">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Go Back
          </Button>
        </div>

        <div className="pt-8 border-t border-muted">
          <p className="text-sm text-muted-foreground mb-4">Looking for something specific?</p>
          <Button variant="ghost" asChild className="text-silony-primary hover:text-silony-dark">
            <Link href="/contact">
              <Search className="mr-2 h-4 w-4" aria-hidden="true" />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
