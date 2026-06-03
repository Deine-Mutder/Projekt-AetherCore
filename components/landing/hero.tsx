import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0a0a0a]">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bgv2.png"
          alt=""
          fill
          className="object-cover object-[center_68%]"
          priority
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-[clamp(1.25rem,5svh,4.5rem)] z-10 flex flex-col items-center px-4 text-center">
        {/* Subtitle */}
        <p className="mb-3 max-w-[min(92vw,34rem)] text-lg text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-xl">
          The Next Generation Open-Source Truck Bulider
        </p>

        {/* Description - gray text */}
        <p className="mb-7 max-w-[min(92vw,28rem)] text-center text-sm text-[#a3a3a3] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] sm:mb-8 sm:text-base">
          Build any Truck you want.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-full bg-[#f5cf23] px-8 py-6 text-base font-semibold text-black hover:bg-[#bd9a00]/90"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-[#333] bg-transparent px-8 py-6 text-base font-medium text-white hover:bg-[#1a1a1a] hover:text-white"
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
