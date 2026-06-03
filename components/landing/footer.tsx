import { Truck } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  Product: [
    { label: "Overview", href: "#" },
    { label: "Features", href: "#" },
    { label: "Releases", href: "#" },
  ],
  Resources: [
    { label: "Docs", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Community: [
    { label: "GitHub", href: "https://github.com" },
    { label: "Discord", href: "https://discord.com" },
    { label: "Forum", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "License", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {/* Logo and tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Truck className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">
                TruckConfigurator
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              The Ultimate ETS2 Truck Builder
            </p>
            <p className="text-sm text-muted-foreground">
              Open Source Forever
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border/50 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 TruckConfigurator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
