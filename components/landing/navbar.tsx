"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center">
            <svg viewBox="0 0 32 32" className="h-8 w-8">
              <circle cx="16" cy="16" r="14" fill="#f5cf23" />
              <circle cx="12" cy="14" r="6" fill="#0a0a0a" />
              <circle cx="20" cy="14" r="6" fill="#0a0a0a" />
              <circle cx="19" cy="14" r="6" fill="#0a0a0a" />
              <circle cx="18" cy="14" r="6" fill="#0a0a0a" />
              <circle cx="17" cy="14" r="6" fill="#0a0a0a" />
              <circle cx="16" cy="14" r="6" fill="#0a0a0a" />
              <circle cx="15" cy="14" r="6" fill="#0a0a0a" />
              <circle cx="14" cy="14" r="6" fill="#0a0a0a" />
              <circle cx="12" cy="14" r="2" fill="#3b82f6" />
              <circle cx="20" cy="14" r="2" fill="#3b82f6" />
              <circle cx="12" cy="5" r="2" fill="#f5cf23" />
            </svg>
          </div>
          <span className="text-lg font-semibold text-white">TruckConfigurator</span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com"
            className="text-sm text-[#a3a3a3] transition-colors hover:text-white"
          >
            Git
          </Link>
          <Link
            href="https://discord.com"
            className="text-sm text-[#a3a3a3] transition-colors hover:text-white"
          >
            Discord
          </Link>
          <Button className="rounded-full bg-[#f5cf23] px-5 text-sm font-medium text-black hover:bg-[#2f81f7]/90">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  )
}
