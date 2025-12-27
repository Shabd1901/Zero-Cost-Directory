"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ShieldCheck, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="flex flex-col">
      
      {/* --- PART 1: WHITE TOP SECTION (Hook & CTA) --- */}
      <div className="bg-white text-black py-24 sm:py-32 border-b border-zinc-200">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-8">
          
          {/* Optional Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-800">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              For Builders
            </div>
          </div>

          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Developer Tools That Are <br className="hidden sm:block" />
            <span className="text-zinc-900">Truly Free Forever</span>
          </h1>

          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-zinc-600 sm:text-xl">
            A trusted reference library for students and builders. We document the tools that let you build without a credit card—highlighting the hard limits, the clear constraints, and the hidden requirements so you never get trapped.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 text-base bg-black hover:bg-zinc-800 text-white font-bold" asChild>
              <Link href="#tools">Browse Free Tools</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-zinc-300 hover:bg-zinc-50 text-black" asChild>
              <Link href="/methodology">How We Verify</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* --- PART 2: BLACK BOTTOM SECTION (Trust Signals) --- */}
      <div className="bg-zinc-950 text-white py-16 border-b border-zinc-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Signal 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 shrink-0">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-white">No Credit Card</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We verify that sign-up doesn't require payment details. No surprise bills.
                </p>
              </div>
            </div>

            {/* Signal 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 shrink-0">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-white">Manually Verified</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  No bots. We test every tool to ensure the free tier is permanent and usable.
                </p>
              </div>
            </div>

            {/* Signal 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 shrink-0">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-white">Clear Limits</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We highlight storage and bandwidth caps upfront so you can plan your stack.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
