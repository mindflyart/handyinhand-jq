"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Droplets } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-background border-t border-border py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-medium text-foreground mb-4">RainTech Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" variant="outline">
                Submit
              </Button>
            </form>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  Technical Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  Product Catalogs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="mailto:info@raintech.com" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  info@raintech.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Droplets className="h-8 w-8 text-foreground" />
            <span className="text-2xl font-light tracking-tight text-foreground">RainTech</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} RainTech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
