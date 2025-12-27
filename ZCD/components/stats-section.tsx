"use client"

import { useEffect, useRef, useState } from "react"
import { tools, categories } from "@/lib/tools-data"

// --- Helper Component: Animated Counter ---
function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false) // Tracks if animation has run to prevent re-running

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        // Only run if visible AND hasn't run yet
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true // Lock it so it doesn't run again
          
          let startTime: number | null = null
          const startValue = 0
          
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            // Easing function (easeOutExpo) for a premium feel
            // It starts fast and slows down at the end
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

            setCount(Math.floor(easeOut * (value - startValue) + startValue))

            if (progress < 1) {
              window.requestAnimationFrame(step)
            } else {
              // Ensure we land exactly on the final number
              setCount(value) 
            }
          }

          window.requestAnimationFrame(step)
          observer.disconnect() // Stop watching this element (saves resources)
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [value, duration])

  return <span ref={elementRef}>{count}</span>
}

// --- Main Component ---
export function StatsSection() {
  // Calculate unique subcategories
  const subcategoryCount = new Set(tools.map((t) => t.subcategory)).size

  const stats = [
    { label: "Categories", value: categories.length },
    { label: "Subcategories", value: subcategoryCount },
    { label: "Total Tools", value: tools.length },
  ]

  return (
    <section className="border-b border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-semibold tracking-tight tabular-nums">
                {/* Use the helper component here */}
                <AnimatedCounter value={stat.value} />
                {/* Optional: Add a '+' if you want, e.g., <span className="text-muted-foreground">+</span> */}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
