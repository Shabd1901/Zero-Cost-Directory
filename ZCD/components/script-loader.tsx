"use client"

import { useEffect, useState } from "react"
import { canLoadAnalytics, canLoadAdvertising } from "@/lib/cookie-consent"

export function ScriptLoader() {
  const [analyticsLoaded, setAnalyticsLoaded] = useState(false)
  const [adsLoaded, setAdsLoaded] = useState(false)

  useEffect(() => {
    // Initial load check
    checkAndLoadScripts()

    // Listen for consent changes
    const handleConsentChange = () => {
      checkAndLoadScripts()
    }

    window.addEventListener("consentStateChanged", handleConsentChange)
    return () => window.removeEventListener("consentStateChanged", handleConsentChange)
  }, [])

  const checkAndLoadScripts = () => {
    // Load analytics if consent given and not already loaded
    if (canLoadAnalytics() && !analyticsLoaded) {
      loadAnalytics()
      setAnalyticsLoaded(true)
    }

    // Load ads if consent given and not already loaded
    if (canLoadAdvertising() && !adsLoaded) {
      loadAdvertising()
      setAdsLoaded(true)
    }
  }

  const loadAnalytics = () => {
    console.log("[v0] Analytics consent granted - ready to load analytics scripts")
    // Future: Add analytics script loading here
    // Example: Google Analytics, Plausible, etc.
  }

  const loadAdvertising = () => {
    console.log("[v0] Advertising consent granted - ready to load ad scripts")
    // Future: Add advertising script loading here
    // Example: Google AdSense, other ad networks
  }

  return null // This component only loads scripts, no UI
}
