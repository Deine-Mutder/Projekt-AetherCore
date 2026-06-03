"use client"

import { Truck, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Truck className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground">TruckConfigurator</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Git
          </Link>
          <Link
            href="https://discord.com"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Discord
          </Link>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  )
}
