import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content overlay - positioned at bottom of mascot area */}
      <div className="relative z-10 mt-[700px] flex flex-col items-center text-center px-4 sm:mt-[820px]">
        {/* Subtitle */}
        <p className="mb-3 text-lg text-white sm:text-xl">
          The Next Generation Open-Source AI
        </p>

        {/* Description - gray text */}
        <p className="mb-8 max-w-md text-center text-sm text-[#a3a3a3] sm:text-base">
          Build, automate and interact with powerful AI systems through a clean and extensible platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-full bg-[#f5a623] px-8 py-6 text-base font-semibold text-black hover:bg-[#d4890f]"
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
