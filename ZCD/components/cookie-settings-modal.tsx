"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"
import { getConsentState, setConsentState } from "@/lib/cookie-consent"

export function CookieSettingsModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [preferences, setPreferences] = useState({
    analytics: false,
    advertising: false,
  })

  useEffect(() => {
    setIsClient(true)

    // Load current consent state
    const state = getConsentState()
    if (state) {
      setPreferences({
        analytics: state.analytics,
        advertising: state.advertising,
      })
    }

    // Listen for open cookie settings event
    const handleOpen = () => {
      const currentState = getConsentState()
      if (currentState) {
        setPreferences({
          analytics: currentState.analytics,
          advertising: currentState.advertising,
        })
      }
      setIsOpen(true)
    }

    window.addEventListener("openCookieSettings", handleOpen)
    return () => window.removeEventListener("openCookieSettings", handleOpen)
  }, [])

  const handleSave = () => {
    setConsentState(preferences)
    setIsOpen(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isClient || !isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Cookie Settings</CardTitle>
          <CardDescription>
            Manage your cookie preferences. Essential cookies are always enabled as they are necessary for the site to
            function.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Essential Cookies */}
          <div className="space-y-3 rounded-lg border border-border p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold">Essential Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Required for the website to function properly. These cannot be disabled.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Always On</span>
                <div className="h-6 w-11 rounded-full bg-primary opacity-50" />
              </div>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="space-y-3 rounded-lg border border-border p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold">Analytics Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Help us understand how visitors use the directory so we can improve the resource and discover which
                  tools are most valuable.
                </p>
              </div>
              <button
                onClick={() => setPreferences((p) => ({ ...p, analytics: !p.analytics }))}
                className={`h-6 w-11 rounded-full transition-colors ${
                  preferences.analytics ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`${preferences.analytics ? "Disable" : "Enable"} analytics cookies`}
              >
                <span
                  className={`block h-5 w-5 rounded-full bg-background shadow-sm transition-transform ${
                    preferences.analytics ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Advertising Cookies */}
          <div className="space-y-3 rounded-lg border border-border p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold">Advertising Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Used to display relevant advertisements. Ad revenue helps us maintain and improve the directory while
                  keeping all tools free to discover.
                </p>
              </div>
              <button
                onClick={() => setPreferences((p) => ({ ...p, advertising: !p.advertising }))}
                className={`h-6 w-11 rounded-full transition-colors ${
                  preferences.advertising ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`${preferences.advertising ? "Disable" : "Enable"} advertising cookies`}
              >
                <span
                  className={`block h-5 w-5 rounded-full bg-background shadow-sm transition-transform ${
                    preferences.advertising ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t border-border pt-6">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
