"use client"

import { tools } from "@/lib/tools-data"

const popularTools = tools.slice(0, 6)

export function PopularToolsMarquee() {
  return (
    <section className="border-y border-border bg-muted/30 py-6">
      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...popularTools, ...popularTools, ...popularTools].map((tool, idx) => (
            <span key={`${tool.id}-${idx}`} className="text-sm font-medium text-muted-foreground">
              {tool.name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
