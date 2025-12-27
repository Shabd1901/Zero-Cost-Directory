import { notFound } from "next/navigation"
import Link from "next/link"
import { tools, getCategoryColor } from "@/lib/tools-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function generateStaticParams() {
  return tools.map((tool) => ({
    id: tool.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const tool = tools.find((t) => t.id === id)

  if (!tool) {
    return {
      title: "Tool Not Found",
    }
  }

  return {
    title: `${tool.name} | Zero-Cost Directory`,
    description: tool.description,
  }
}

export default async function ToolPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const tool = tools.find((t) => t.id === id)

  if (!tool) {
    notFound()
  }

  const colors = getCategoryColor(tool.category)

  return (
    <main className="bg-background py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-6">
            <div
              className="inline-block px-6 py-5 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
              }}
            >
              <div className="space-y-2">
                <div className="text-xs font-medium uppercase tracking-wide text-white/80">{tool.category}</div>
                <h1 className="text-3xl font-semibold text-white">{tool.name}</h1>
                <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {tool.subcategory}
                </div>
              </div>
            </div>

            {(tool.noCreditCard || tool.active24x7) && (
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {tool.noCreditCard && <span>No Credit Card Required</span>}
                {tool.noCreditCard && tool.active24x7 && <span>·</span>}
                {tool.active24x7 && <span>Active 24/7</span>}
              </div>
            )}
          </div>

          {/* Overview */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">{tool.overview}</p>
          </section>

          {/* Permanent Free Tier */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-semibold tracking-tight">Permanent Free Tier</h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">{tool.freeTierDetails}</p>
          </section>

          {/* Hard Limits */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-semibold tracking-tight">Hard Limits</h2>
            <ul className="space-y-2">
              {tool.hardLimits.map((limit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  <span className="leading-relaxed">{limit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Strengths */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-semibold tracking-tight">Strengths</h2>
            <ul className="space-y-2">
              {tool.strengths.map((strength, idx) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  <span className="leading-relaxed">{strength}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Limitations */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-semibold tracking-tight">Limitations</h2>
            <ul className="space-y-2">
              {tool.limitations.map((limitation, idx) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  <span className="leading-relaxed">{limitation}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Best For */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-semibold tracking-tight">Best For</h2>
            <div className="flex flex-wrap gap-2">
              {tool.bestFor.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </section>

          {/* Links */}
          <section className="space-y-4 border-t border-border pt-8">
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href={tool.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={tool.documentation} target="_blank" rel="noopener noreferrer">
                  Documentation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </section>

          <Card className="border-2 border-dashed border-muted bg-muted/20">
            <CardContent className="flex h-32 items-center justify-center">
              <p className="text-sm text-muted-foreground">Reserved Ad Space</p>
            </CardContent>
          </Card>

          {/* Back Link - no scroll to top, just go back */}
          <div className="border-t border-border pt-8">
            <Button variant="ghost" asChild>
              <Link href="/#tools">← Back to Tools</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
