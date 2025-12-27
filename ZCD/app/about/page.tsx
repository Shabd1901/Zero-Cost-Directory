import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LinkedinIcon, CheckCircle2, Search, ShieldCheck, RefreshCw, ArrowUpRight, Code2 } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Zero-Cost Directory",
  description: "Learn about Zero-Cost Directory and our mission to help builders discover truly free developer tools.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      
      {/* 1. HERO SECTION (White Background) */}
      <div className="bg-white text-black py-24 sm:py-32 border-b border-zinc-200">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-8">
          
          {/* Logo / Icon Placeholder */}
          {/* Logo Image */}
          <div className="flex justify-center">
            <div className="relative h-40 w-40"> {/* Increased size slightly for better visibility */}
              <Image 
                src="/ZCDlogo.png" 
                alt="Zero-Cost Directory Logo"
                fill // Automatically fills the container
                className="object-contain" // Ensures the logo isn't cut off
                priority
              />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-7xl">
              About Zero-Cost Directory
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-600 font-medium max-w-2xl mx-auto">
              A public initiative to document and share developer tools that are genuinely free forever.
            </p>
          </div>

          <p className="text-zinc-500 leading-relaxed max-w-prose mx-auto">
            We are building the trust layer for the developer ecosystem. A verified, manual index of infrastructure that doesn't require a credit card to start.
          </p>

          {/* Product Hunt Box */}
          <div className="pt-4 flex justify-center">
            <a 
              href="https://www.producthunt.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 p-1 pl-4 pr-2 rounded-full border border-zinc-200 hover:border-zinc-400 transition-all bg-zinc-50 hover:bg-zinc-100"
            >
              <span className="text-sm font-semibold text-zinc-600 group-hover:text-black">
                We are live on Product Hunt
              </span>
              <span className="h-8 w-8 rounded-full bg-[#FF6154] text-white flex items-center justify-center font-bold text-xs">
                P
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. DARK CONTENT SECTION (Black Background) */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32 space-y-32">

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-16">
            <section className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight border-l-4 border-white pl-6">Our Mission</h2>
              <div className="text-zinc-400 leading-relaxed space-y-4 pl-7">
                <p>
                  To provide students, learners, and independent builders with a trusted reference for discovering developer tools that are permanently free.
                </p>
                <p>
                  We cut through marketing noise to deliver clear, honest documentation of what's truly available at zero cost. Too many "free tier" lists include promotional trials. We believe builders deserve better.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight border-l-4 pl-6 border-white">Our Vision</h2>
              <div className="text-zinc-400 leading-relaxed space-y-4 pl-7">
                <p>
                  We envision a world where learning to build software is accessible to anyone with curiosity and dedication. Cost should not be a barrier to experimentation.
                </p>
                <p>
                  This directory serves as infrastructure for education, not a commercial product. We help remove financial obstacles from the learning journey.
                </p>
              </div>
            </section>
          </div>

          {/* How We Work (Cards) */}
          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tighter text-center">How We Work</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Card 1 */}
              <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                <Search className="h-8 w-8 text-white mb-6" />
                <h3 className="text-xl font-bold mb-3">Independent Verification</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We verify tools manually. We create accounts, attempt deployments, and read the Terms of Service fine print so you don't have to.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                <ShieldCheck className="h-8 w-8 text-white mb-6" />
                <h3 className="text-xl font-bold mb-3">No Hidden Agendas</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Our listings are based strictly on our criteria. We do not accept payment for placement, sponsorship, or affiliate bias.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                <CheckCircle2 className="h-8 w-8 text-white mb-6" />
                <h3 className="text-xl font-bold mb-3">Transparent Constraints</h3>
                <p className="text-zinc-400 leading-relaxed">
                  "Free" often comes with limits. We document the hard numbers (storage, bandwidth, spin-down) clearly up front.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                <RefreshCw className="h-8 w-8 text-white mb-6" />
                <h3 className="text-xl font-bold mb-3">Regular Updates</h3>
                <p className="text-zinc-400 leading-relaxed">
                  The ecosystem changes fast. We monitor our tools quarterly and update information immediately when pricing models change.
                </p>
              </div>

            </div>
          </section>

          {/* Stats (Bigger) */}
          <section className="space-y-12 border-y border-zinc-900 py-24">
            <h2 className="text-center text-zinc-500 font-medium tracking-wide uppercase text-sm">Zero-Cost Directory in Numbers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
              <div className="space-y-2">
                <div className="text-7xl font-bold tracking-tighter text-white">34</div>
                <div className="text-zinc-500 font-medium">Tools Documented</div>
              </div>
              <div className="space-y-2">
                <div className="text-7xl font-bold tracking-tighter text-white">6</div>
                <div className="text-zinc-500 font-medium">Core Categories</div>
              </div>
              <div className="space-y-2">
                <div className="text-7xl font-bold tracking-tighter text-white">100%</div>
                <div className="text-zinc-500 font-medium">Verified Free</div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p className="text-left">
                Zero-Cost Directory began as a simple document shared among students looking for free alternatives to expensive development tools. As the list grew, it became clear that the broader community needed this information in an accessible format.
              </p>
              <p className="text-left">
                What started as a spreadsheet evolved into this public resource. We realized that clear, honest documentation of free tiers could save countless hours of research and help builders make confident technology choices.
              </p>
            </div>
          </section>

          {/* Initiatives & Collaboration */}
          <div className="grid md:grid-cols-2 gap-8 pt-12">
            
            {/* S&T */}
            <div className="bg-zinc-900 rounded-xl p-8 space-y-6">
              <h2 className="text-xl font-bold text-white">An Initiative by S&T Web Works</h2>
              <p className="text-zinc-400 leading-relaxed">
                Dedicated to creating public resources that support independent builders and students. This project reflects our commitment to reducing barriers in technology education.
              </p>
            </div>

            {/* TFU */}
            <div className="text-black rounded-xl p-8 space-y-6 bg-zinc-900">
              <h2 className="text-xl font-bold text-white">In Collaboration with<br/>The Free University</h2>
              <p className="leading-relaxed text-zinc-400">
                We work with TFU to ensure quality technology education is accessible. They provide the learning paths; we provide the tools.
              </p>
              <a 
                href="https://thefreeuniversity.space" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center font-bold hover:underline text-white border-double border text-center border-transparent underline gap-2"
              >
                Visit The Free University <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

          </div>

          {/* CTA */}
          <section className="text-center space-y-8 pt-12 pb-12">
            <h2 className="text-4xl font-bold tracking-tighter">Ready to Start Building?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 h-12 px-8 text-base font-bold" asChild>
                <Link href="/">Browse Tools</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-900 hover:text-white h-12 px-8 text-base" asChild>
                <a
                  href="https://www.linkedin.com/company/zero-cost-directory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="mr-2 h-5 w-5" />
                  Follow on LinkedIn
                </a>
              </Button>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
