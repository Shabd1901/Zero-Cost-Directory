// Cookie Consent State Management
// Single source of truth for cookie consent preferences

export type ConsentState = {
  essential: boolean // Always true
  analytics: boolean
  advertising: boolean
  timestamp: number
}

const CONSENT_COOKIE_NAME = "zcd_cookie_consent"
const CONSENT_VERSION = "1.0"

export function getConsentState(): ConsentState | null {
  if (typeof window === "undefined") return null

  try {
    const stored = localStorage.getItem(CONSENT_COOKIE_NAME)
    if (!stored) return null

    const parsed = JSON.parse(stored)

    // Validate structure
    if (
      typeof parsed.essential === "boolean" &&
      typeof parsed.analytics === "boolean" &&
      typeof parsed.advertising === "boolean" &&
      typeof parsed.timestamp === "number"
    ) {
      return parsed
    }

    return null
  } catch {
    return null
  }
}

export function setConsentState(state: Omit<ConsentState, "essential" | "timestamp">): void {
  if (typeof window === "undefined") return

  const consentState: ConsentState = {
    essential: true, // Always true
    analytics: state.analytics,
    advertising: state.advertising,
    timestamp: Date.now(),
  }

  localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(consentState))

  // Dispatch event for components to react to consent changes
  window.dispatchEvent(new CustomEvent("consentStateChanged", { detail: consentState }))
}

export function hasConsentDecision(): boolean {
  return getConsentState() !== null
}

export function acceptAllCookies(): void {
  setConsentState({
    analytics: true,
    advertising: true,
  })
}

export function rejectNonEssential(): void {
  setConsentState({
    analytics: false,
    advertising: false,
  })
}

export function canLoadAnalytics(): boolean {
  const state = getConsentState()
  return state?.analytics === true
}

export function canLoadAdvertising(): boolean {
  const state = getConsentState()
  return state?.advertising === true
}
