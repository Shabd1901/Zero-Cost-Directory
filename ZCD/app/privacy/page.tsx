import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Zero-Cost Directory",
  description: "Privacy policy for Zero-Cost Directory.",
}

export default function PrivacyPage() {
  return (
    <main className="bg-background py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Last Updated:</strong> December 2024
            </p>
            <p>
              Zero-Cost Directory is committed to protecting your privacy. This policy outlines how we collect, use, and
              protect information when you use our website.
            </p>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Information We Collect</h2>
            <p>
              Zero-Cost Directory is a static reference website. We do not collect personal information, create user
              accounts, or track individual browsing behavior beyond optional analytics with your consent.
            </p>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Analytics (Optional)</h2>
            <p>
              With your consent, we use privacy-respecting analytics to understand how visitors use the directory. This
              helps us improve the resource and understand which tools are most valuable to the community.
            </p>
            <p>Analytics data is aggregated and anonymized. You can opt out at any time through our Cookie Settings.</p>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Cookies</h2>
            <p>
              We use cookies for essential functionality (always enabled) and optional analytics and advertising (with
              your consent). See our{" "}
              <a href="/cookies" className="text-foreground underline">
                Cookie Policy
              </a>{" "}
              for detailed information.
            </p>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Advertising (Optional)</h2>
            <p>
              With your consent, we display advertisements to support the directory. Ad revenue helps us maintain and
              improve this free resource while keeping all tools discoverable at no cost.
            </p>
            <p>
              Advertising partners may use cookies to show relevant ads. You can control advertising cookies through our
              Cookie Settings at any time.
            </p>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Third-Party Links</h2>
            <p>
              Zero-Cost Directory contains links to external websites. We are not responsible for the privacy practices
              of these sites. Please review their privacy policies before sharing information.
            </p>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Data Retention</h2>
            <p>
              Cookie consent preferences are stored locally in your browser until you clear them or change your
              settings. No personal data is transmitted to our servers.
            </p>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>View and update your cookie preferences at any time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>Opt out of analytics and advertising cookies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>Clear your consent preferences through your browser settings</span>
              </li>
            </ul>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Contact</h2>
            <p>
              For privacy questions or concerns, contact us at{" "}
              <a href="mailto:privacy@zerocost.directory" className="text-foreground underline">
                privacy@zerocost.directory
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
