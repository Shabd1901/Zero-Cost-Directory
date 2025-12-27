import { Hero } from "@/components/hero"
import { StatsSection } from "@/components/stats-section"
import { ToolsSection } from "@/components/tools-section"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <ToolsSection />
    </main>
  )
}
