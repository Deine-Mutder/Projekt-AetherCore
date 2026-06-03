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
    { label: "GitHub", href: "#" },
    { label: "Discord", href: "#" },
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
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a] px-4 py-12">
      <div className="mx-auto max-w-full px-4 lg:px-8 2xl:px-12" style={{ maxWidth: "1400px" }}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {/* Logo and tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center">
                <svg viewBox="0 0 28 28" className="h-7 w-7">
              <circle cx="16" cy="16" r="12" fill="#f5cf23" />
              <circle cx="12" cy="14" r="5" fill="#0a0a0a" />
              <circle cx="20" cy="14" r="5" fill="#0a0a0a" />
              <circle cx="19" cy="14" r="5" fill="#0a0a0a" />
              <circle cx="18" cy="14" r="5" fill="#0a0a0a" />
              <circle cx="17" cy="14" r="5" fill="#0a0a0a" />
              <circle cx="16" cy="14" r="5" fill="#0a0a0a" />
              <circle cx="15" cy="14" r="5" fill="#0a0a0a" />
              <circle cx="14" cy="14" r="5" fill="#0a0a0a" />
              <circle cx="12" cy="14" r="1.9" fill="#3b82f6" />
              <circle cx="20" cy="14" r="1.9" fill="#3b82f6" />
                </svg>
              </div>
              <span className="text-base font-semibold text-white">TruckConfigurator</span>
            </Link>
            <p className="mt-3 text-sm text-[#666]">
              The Ultimate ETS2 Truck Builder
            </p>
            <p className="text-sm text-[#666]">
              Open Source Forever
            </p>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold text-white">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#666] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and sparkle */}
        <div className="relative mt-12 border-t border-[#1a1a1a] pt-8">
          <p className="text-center text-sm text-[#666]">
            © 2025 TruckConfigurator. All rights reserved.
          </p>
          <p className="mt-2 text-center text-sm text-[#f5cf23] drop-shadow-[0_0_18px_rgba(245,207,35,0.85)]">
            Made by : <span className="font-semibold text-white">The real Plumz</span>
          </p>
          {/* Sparkle */}
          <div className="absolute bottom-0 right-8 hidden lg:block">
            <svg viewBox="0 0 40 40" className="h-10 w-10">
              <path
                d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z"
                fill="rgb(10, 10, 10)"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}
