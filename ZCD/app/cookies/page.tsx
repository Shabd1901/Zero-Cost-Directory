"use client"

export default function CookiesPage() {
  const handleOpenSettings = () => {
    window.dispatchEvent(new CustomEvent("openCookieSettings"))
  }

  return (
    <main className="bg-background py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-semibold tracking-tight">Cookie Policy</h1>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Last Updated:</strong> December 2024
            </p>
            <p>
              This Cookie Policy explains how Zero-Cost Directory uses cookies and similar technologies to provide,
              improve, and protect our services.
            </p>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites remember
              your preferences and understand how you use the site.
            </p>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Cookie Categories</h2>

            <h3 className="pt-6 text-xl font-semibold text-foreground">Essential Cookies (Always Enabled)</h3>
            <p>Required for the website to function properly. These cannot be disabled.</p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>
                  <strong className="text-foreground">Purpose:</strong> Store your cookie consent preferences
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>
                  <strong className="text-foreground">Duration:</strong> Persistent (stored until cleared)
                </span>
              </li>
            </ul>

            <h3 className="pt-6 text-xl font-semibold text-foreground">Analytics Cookies (Optional)</h3>
            <p>Help us understand how visitors use the directory so we can improve the resource.</p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>
                  <strong className="text-foreground">Purpose:</strong> Aggregate usage statistics, popular tools,
                  navigation patterns
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>
                  <strong className="text-foreground">Duration:</strong> Varies by analytics provider (typically 1-2
                  years)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>
                  <strong className="text-foreground">Control:</strong> Can be disabled through Cookie Settings
                </span>
              </li>
            </ul>

            <h3 className="pt-6 text-xl font-semibold text-foreground">Advertising Cookies (Optional)</h3>
            <p>Used to display relevant advertisements that support the directory.</p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>
                  <strong className="text-foreground">Purpose:</strong> Show relevant ads, measure ad performance
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>
                  <strong className="text-foreground">Duration:</strong> Varies by ad network (typically 1 year)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>
                  <strong className="text-foreground">Control:</strong> Can be disabled through Cookie Settings
                </span>
              </li>
            </ul>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Managing Cookies</h2>
            <p>You can control your cookie preferences at any time:</p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>
                  Use our{" "}
                  <button onClick={handleOpenSettings} className="text-foreground underline">
                    Cookie Settings
                  </button>{" "}
                  to enable or disable optional cookies
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>Clear cookies through your browser settings (note: this will reset your preferences)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>Disabling cookies may affect the functionality of Zero-Cost Directory and other websites</span>
              </li>
            </ul>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Third-Party Cookies</h2>
            <p>
              When you consent to advertising cookies, our ad network partners may set their own cookies. These are
              governed by their respective privacy policies.
            </p>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
              updated revision date.
            </p>

            <h2 className="pt-8 text-2xl font-semibold text-foreground">Contact</h2>
            <p>
              For questions about our cookie policy, contact us at{" "}
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
