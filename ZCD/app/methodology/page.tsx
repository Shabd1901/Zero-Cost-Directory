import type { Metadata } from "next"
import { 
  ShieldCheck, 
  Search, 
  CreditCard, 
  FileText, 
  Terminal, 
  RefreshCw, 
  Zap, 
  ServerCrash, 
  Users, 
  CircleDollarSign 
} from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Methodology | Zero-Cost Directory",
  description: "Learn how we verify and select tools for the Zero-Cost Directory.",
}

export default function MethodologyPage() {
  return (
    <main className="bg-background min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <div className="py-16 border-b border-border/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Our Methodology & Criteria
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Understanding how we verify tools and what qualifies for inclusion in the Zero-Cost Directory.
          </p>
        </div>
      </div>

      {/* --- CONTENT BODY --- */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        
        {/* 1. THE TOUGH QUESTIONS (New Addition - TFU Style Cards) */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">We Ask The Hard Questions</h2>
            <p className="text-muted-foreground text-lg">Before a tool makes it onto our list, we interrogate it.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-muted/30 p-6 rounded-2xl border border-border hover:border-foreground/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                    <Zap className="text-blue-500 w-5 h-5" />
                    <h3 className="font-bold text-foreground">Is it usable?</h3>
                </div>
                <p className="text-sm text-muted-foreground">We assess hard limits. The best free tiers let you ship an MVP, not just a "Hello World".</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-2xl border border-border hover:border-foreground/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                    <ServerCrash className="text-red-500 w-5 h-5" />
                    <h3 className="font-bold text-foreground">Will it break?</h3>
                </div>
                <p className="text-sm text-muted-foreground">We look for hidden spin-down policies and pricing cliffs that kill projects.</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-2xl border border-border hover:border-foreground/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                    <Users className="text-purple-500 w-5 h-5" />
                    <h3 className="font-bold text-foreground">Is there support?</h3>
                </div>
                <p className="text-sm text-muted-foreground">Isolation shouldn't be the price of free. We check for community and docs.</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-2xl border border-border hover:border-foreground/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                    <CircleDollarSign className="text-emerald-500 w-5 h-5" />
                    <h3 className="font-bold text-foreground">Is it truly free?</h3>
                </div>
                <p className="text-sm text-muted-foreground">No hidden fees. No credit card requirements. Free means free.</p>
              </div>
          </div>
        </section>

        {/* 2. CORE DEFINITIONS (Original Content Preserved) */}
        <div className="space-y-16">
            {/* Intro */}
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight">How We Curate the Zero-Cost Directory</h2>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  We do not use bots to scrape the web. Every tool in this directory is manually verified by humans to ensure it meets a strict standard of utility and honesty. Here is exactly how we define our criteria.
                </p>
              </div>
            </section>

            {/* Builder's Contract */}
            <section className="space-y-6">
              <h3 className="text-3xl font-semibold tracking-tight">The "Builder's Contract"</h3>
              <p className="text-muted-foreground">To be listed, a tool must meet our three core definitions of "Free."</p>
              
              <div className="space-y-6 border-t border-border pt-8">
                <h3 className="text-2xl font-semibold tracking-tight">• What "Zero-Cost" Means</h3>
                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  <p>
                    Zero-Cost means the tool offers a <strong className="text-foreground">permanent free tier</strong> that you can use indefinitely without payment. It's not a trial. It's not a promotional offer. It's a core offering that the provider commits to maintaining.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><span className="font-medium text-foreground">Not a Trial:</span> It does not expire after 14 or 30 days.</li>
                    <li><span className="font-medium text-foreground">Not a Promo:</span> It is not a temporary credit (e.g., "$200 for your first month").</li>
                    <li><span className="font-medium text-foreground">Real Utility:</span> It is not a "toy" tier; it must be usable for a real side project or MVP.</li>
                  </ul>
                  <p>
                    We recognize that "free forever" comes with constraints. That's why we document the hard limits clearly so you can evaluate if the free tier meets your needs before investing time in learning the tool.
                  </p>
                </div>
              </div>
            </section>

            {/* Permanent Free Tier */}
            <section className="space-y-6 border-t border-border pt-12">
              <h2 className="text-3xl font-semibold tracking-tight">What "Permanent Free Tier" Means</h2>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  A permanent free tier is a pricing plan that exists alongside paid plans and provides ongoing value without requiring upgrade for basic use cases.
                </p>
                <p><strong className="text-foreground">Examples of permanent free tiers:</strong></p>
                <ul className="ml-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    <span>GitHub Pages: Unlimited static sites for public repositories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    <span>Vercel Hobby: 100 GB bandwidth per month, unlimited deployments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    <span>MongoDB Atlas: 512 MB storage on shared cluster</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Active 24/7 */}
            <section className="space-y-6 border-t border-border pt-12">
              <h2 className="text-3xl font-semibold tracking-tight">What "Active 24/7" Means</h2>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Some free tiers include automatic pausing or sleep modes after periods of inactivity. We flag these clearly so you know what to expect.
                </p>
                <p>
                  <strong className="text-foreground">Active 24/7</strong> means the service stays running continuously without sleep or spin-down periods. This is essential for production applications or services that need to respond instantly.
                </p>
                
                <p>
                  <strong className="text-foreground">Sleep / Spins Down</strong> means the service "sleeps" to save resources after inactivity and takes time to "wake up". We list these, but we flag them clearly.
                </p>
                <Card className="border-muted">
                  <CardHeader>
                    <CardTitle className="text-lg">Example: Supabase</CardTitle>
                    <CardDescription>
                      Supabase free tier projects pause after 1 week of inactivity. They wake up when accessed, but there's a delay. This is marked as NOT Active 24/7.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>

            {/* No Credit Card */}
            <section className="space-y-6 border-t border-border pt-12">
              <h2 className="text-3xl font-semibold tracking-tight">What "No Credit Card" Means</h2>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  We prioritize accessibility. A tool is marked as "No CC" only if you can sign up, build, and deploy to production without ever entering payment details. This removes the risk of accidental billing.
                </p>
              </div>
            </section>

            {/* Disqualification List */}
            <section className="space-y-6 border-t-[7px] border-border pt-12">
              <h2 className="text-3xl font-semibold tracking-tight">What Disqualifies a Tool</h2>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>We exclude tools that:</p>
                <ul className="ml-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    <span><strong className="text-foreground">Require credit card for free tier:</strong> Even if they don't charge, requiring payment info creates a barrier and risk.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    <span><strong className="text-foreground">Offer only time-limited trials:</strong> 30-day trials or promotional periods are not permanent free tiers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    <span><strong className="text-foreground">Have education-only free tiers:</strong> It is only free for .edu email addresses. While valuable for students, these aren't available to all builders and aren't permanent.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    <span><strong className="text-foreground">Hide free tier limits:</strong> Transparency is essential. Vague limits like "reasonable use" don't qualify. We require hard data (e.g., "500MB," not "plenty of space").</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    <span><strong className="text-foreground">Force upgrade for basic functionality:</strong> The free tier exists but blocks essential features needed for a basic app. The free tier must be genuinely useful on its own.</span>
                  </li>
                </ul>
              </div>
            </section>
        </div>

        {/* 3. REVIEW PROCESS (Timeline Design) */}
        <section className="space-y-6 border-t border-border pt-12">
           <h2 className="text-3xl font-semibold tracking-tight">How We Review and Verify Tools</h2>
           <p className="text-muted-foreground">Our review process includes:</p>

           <div className="relative pl-4 sm:pl-8 space-y-12 mt-8">
               {/* Vertical Line */}
               <div className="absolute left-[27px] sm:left-[43px] top-2 bottom-4 w-0.5 bg-border" />

               {/* Step 1 */}
               <div className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-background border-2 border-border shadow-sm">
                     <FileText className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="pt-2">
                     <h3 className="text-lg font-bold text-foreground mb-1">1. Documentation Review</h3>
                     <p className="text-muted-foreground">We read the official pricing pages and terms of service to understand the free tier constraints.</p>
                  </div>
               </div>

               {/* Step 2 */}
               <div className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-background border-2 border-border shadow-sm">
                     <Terminal className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="pt-2">
                     <h3 className="text-lg font-bold text-foreground mb-1">2. Hands-on Testing</h3>
                     <p className="text-muted-foreground">We create accounts and test the signup process to verify credit card requirements.</p>
                  </div>
               </div>

               {/* Step 3 */}
               <div className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-background border-2 border-border shadow-sm">
                     <Users className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="pt-2">
                     <h3 className="text-lg font-bold text-foreground mb-1">3. Community Validation</h3>
                     <p className="text-muted-foreground">We monitor user experiences and provider announcements for changes.</p>
                  </div>
               </div>

               {/* Step 4 */}
               <div className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-background border-2 border-border shadow-sm">
                     <RefreshCw className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="pt-2">
                     <h3 className="text-lg font-bold text-foreground mb-1">4. Quarterly Updates</h3>
                     <p className="text-muted-foreground">Software pricing changes fast. We re-verify our listings every 3 months to flag tools that have removed their free tiers.</p>
                  </div>
               </div>
            </div>
        </section>

        {/* 4. ADVERTISING POLICY (Original Content) */}
        <section className="space-y-6 border-t border-border pt-12">
            <h2 className="text-3xl font-semibold tracking-tight">Advertising and Independence</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Zero-Cost Directory may display advertisements to sustain operations. However, <strong className="text-foreground">ads do not affect which tools are listed or how they're ranked.</strong>
              </p>
              <p>
                Tools are selected based solely on meeting our criteria for permanent free tiers. Our commitment is to accuracy and transparency, not revenue from vendors.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-medium text-foreground">We do not sell listings.</span></li>
                <li><span className="font-medium text-foreground">We do not accept payment to add a tool.</span></li>
                <li><span className="font-medium text-foreground">We do not accept payment to improve a ranking.</span></li>
                <li><span className="font-medium text-foreground">We do not accept payment to hide a "Con" or limitation.</span></li>
              </ul>
            </div>
        </section>

        {/* 5. TRUST BOX (New Addition - TFU Style) */}
        <section className="mt-16 relative">
             <div className="bg-[#18181B] rounded-3xl p-8 sm:p-16 border border-zinc-800 text-center space-y-8 shadow-2xl">
                 <h2 className="text-3xl sm:text-4xl font-bold text-white">
                     Why Trust Our Reviews?
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                     Unlike affiliate-driven review sites, Zero-Cost Directory has no financial relationship with infrastructure providers. We don't earn commissions. We don't accept payment for favorable reviews. Our only incentive is helping builders find genuine free tiers.
                 </p>
                 <div className="mt-8 inline-block border-2 border-white px-8 py-4 text-lg font-bold tracking-wider uppercase text-white bg-black/50">
                     IF IT'S HERE, IT'S WORTH YOUR TIME.
                 </div>
             </div>
        </section>

      </div>
    </main>
  )
}
