import { MessageCircle, Github, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { icon: MessageCircle, label: "Discord", href: "https://discord.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: BookOpen, label: "Docs", href: "#" },
]

export function CommunityCTA() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm sm:p-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
            Join the Community
          </p>
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Be part of something bigger.
          </h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Connect with ETS2 players, share configs, and shape the future of
            TruckConfigurator.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {links.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                className="border-border bg-secondary/50 text-foreground hover:bg-secondary"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
