"use client"

import Link from "next/link"
import Image from "next/image" // Import the Image component
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Tools" },
    { href: "/methodology", label: "Methodology" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          
          {/* Logo Image */}
          <div className="relative flex h-10 w-10 items-center justify-center">
            <Image 
              src="/ZCDlogo.png" // Make sure this matches your filename in the public folder
              
              width={70}
              height={70}
              className="object-contain" // Ensures logo fits nicely without stretching
              priority // Loads image immediately since it's above the fold
            />
          </div>

          <span className="hidden text-lg font-semibold tracking-tight sm:inline">Zero-Cost Directory</span>
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
