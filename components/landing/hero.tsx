import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TruckMascot } from "./truck-mascot"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16">
      {/* Ambient glow effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Mascot */}
        <div className="mb-8">
          <TruckMascot className="h-48 w-48 sm:h-56 sm:w-56" />
        </div>

        {/* Headline */}
        <h1 className="mb-4 bg-gradient-to-b from-primary via-primary to-primary/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          TruckConfigurator
        </h1>

        {/* Subtitle */}
        <p className="mb-4 text-xl text-foreground sm:text-2xl">
          The Ultimate ETS2 Truck Builder
        </p>

        {/* Description */}
        <p className="mb-8 max-w-xl text-muted-foreground">
          Mix and match parts from every DLC across all brands — build your dream truck and export it instantly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border bg-transparent text-foreground hover:bg-secondary"
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
