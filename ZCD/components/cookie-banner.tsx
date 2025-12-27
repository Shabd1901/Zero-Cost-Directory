"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { hasConsentDecision, acceptAllCookies, rejectNonEssential } from "@/lib/cookie-consent"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Only show if no consent decision exists
    if (!hasConsentDecision()) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    acceptAllCookies()
    setIsVisible(false)
  }

  const handleRejectNonEssential = () => {
    rejectNonEssential()
    setIsVisible(false)
  }

  const handleOpenSettings = () => {
    setIsVisible(false)
    // Dispatch event to open cookie settings
    window.dispatchEvent(new CustomEvent("openCookieSettings"))
  }

  if (!isClient || !isVisible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1 space-y-2">
            <p className="text-sm leading-relaxed text-foreground">
              We use cookies to improve your experience. Essential cookies are required for the site to function.
              Analytics and advertising cookies are optional and help us improve the directory.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 sm:shrink-0">
            <Button variant="outline" size="sm" onClick={handleRejectNonEssential}>
              Reject Non-Essential
            </Button>
            <Button variant="ghost" size="sm" onClick={handleOpenSettings}>
              Cookie Settings
            </Button>
            <Button size="sm" onClick={handleAcceptAll}>
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
