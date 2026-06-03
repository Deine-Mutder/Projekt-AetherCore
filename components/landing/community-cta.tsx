import { MessageCircle, Github, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { icon: MessageCircle, label: "Discord" },
  { icon: Github, label: "GitHub" },
  { icon: BookOpen, label: "Docs" },
]

export function CommunityCTA() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-24">
      <div className="mx-auto max-w-full px-4 lg:px-8 2xl:px-12" style={{ maxWidth: "1400px" }}>
        <div className="overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#111111] p-10 text-center sm:p-14">
          {/* Label */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5cf23]">
            Join the Community
          </p>
          
          {/* Heading */}
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            Be part of something bigger.
          </h2>
          
          {/* Description */}
          <p className="mx-auto mb-10 max-w-sm text-[#a3a3a3]">
            Connect with ETS2 players, share configs, and shape the future of TruckConfigurator.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {links.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                className="rounded-full border-[#333] bg-[#1a1a1a] px-6 py-5 text-sm font-medium text-white hover:bg-[#2a2a2a]"
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
