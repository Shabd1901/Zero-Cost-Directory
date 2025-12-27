"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollManager() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return

    // Pages that must ALWAYS start at top
    const alwaysScrollToTopPages = ["/", "/about", "/methodology", "/privacy", "/cookies"]

    const isAlwaysTopPage = alwaysScrollToTopPages.includes(pathname)

    // Tool detail pages (/tools/[slug])
    const isToolDetailPage = pathname.startsWith("/tools/") && pathname !== "/tools"

    // Tools index page
    const isToolsIndexPage = pathname === "/tools"

    // --- Scroll behavior ---

    if (isAlwaysTopPage || isToolDetailPage) {
      // New document → always start at top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      return
    }

    if (isToolsIndexPage) {
      // Do nothing → allow browser to restore scroll position
      return
    }

    // Default fallback (safe)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])

  return null
}
