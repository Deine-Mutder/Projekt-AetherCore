import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Mascot } from "./mascot"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 pt-16">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5a623]/15 blur-[150px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Mascot */}
        <div className="mb-6">
          <Mascot className="h-52 w-52 sm:h-64 sm:w-64" />
        </div>

        {/* Main headline - large white text */}
        <h1 className="mb-3 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          TruckConfigurator
        </h1>

        {/* Subtitle */}
        <p className="mb-4 text-xl text-white sm:text-2xl">
          The Ultimate ETS2 Truck Builder
        </p>

        {/* Description - gray text */}
        <p className="mb-8 max-w-md text-center text-[#a3a3a3]">
          Mix and match parts from every DLC across all brands — build your dream truck and export it instantly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-full bg-[#f5a623] px-8 py-6 text-base font-medium text-black hover:bg-[#d4890f]"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-[#333] bg-transparent px-8 py-6 text-base font-medium text-white hover:bg-[#1a1a1a]"
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
