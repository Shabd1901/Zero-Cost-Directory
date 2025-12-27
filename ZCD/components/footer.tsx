"use client"

import Link from "next/link"
import { LinkedinIcon } from "lucide-react"

export function Footer() {
  const handleCookieSettings = () => {
    window.dispatchEvent(new CustomEvent("openCookieSettings"))
  }

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Zero-Cost Directory</h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              A trusted reference library helping students and builders discover developer tools that are genuinely free
              forever. An initiative by S&T Web Works.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              To provide transparent, accurate information about permanently free developer tools, removing cost
              barriers from learning and building.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-foreground">
              Cookie Policy
            </Link>
            <button onClick={handleCookieSettings} className="transition-colors hover:text-foreground">
              Cookie Settings
            </button>
          </div>

          {/* Connect */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Connect:</span>
            <a
              href="https://www.linkedin.com/company/zero-cost-directory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:zerocodedirectory@gmail.com"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              contact@zerocost.directory
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
