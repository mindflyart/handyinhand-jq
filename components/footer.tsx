import Link from "next/link"
import { Droplets } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a2e44] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Droplets className="h-6 w-6 text-white" />
              <span className="font-semibold text-lg text-white">HandyInHand</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Australia&apos;s trusted supplier of environmental monitoring equipment and spare parts.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#products" className="text-sm text-white/60 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-sm text-white/60 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#industries" className="text-sm text-white/60 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-white/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>1300 HANDYINHAND</li>
              <li>sales@handyinhand.com.au</li>
              <li>Unit 5, 123 Industrial Drive</li>
              <li>Eagle Farm, QLD 4009</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>ABN: XX XXX XXX XXX</li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-white/40 text-center">
            {new Date().getFullYear()} HandyInHand Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
