import { Check } from "lucide-react"
import Image from "next/image"

const features = [
  "Cross-DLC Parts",
  "Brand Mixing",
  "Live Preview",
  "One-Click Export",
  "All Truck Models",
  "Community Configs",
]

export function Features() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5cf23]">
          Built for Modders
        </p>

        {/* Heading - white */}
        <h2 className="mb-16 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
          Build your perfect truck,<br />your way.
        </h2>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Dashboard Preview Image - replace /dashboard-preview.png with your own image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#0f0f0f]">
              <Image
                src="/dashboard-preview.png"
                alt="Dashboard Preview"
                width={1024}
                height={1024}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Features checklist - right side */}
          <div className="flex items-center lg:justify-end lg:pl-12">
            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#f5cf23]/30 bg-[#f5cf23]/10">
                    <Check className="h-3.5 w-3.5 text-[#f5cf23]" />
                  </div>
                  <span className="text-base text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
