import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OpenSource() {
  return (
    <section className="relative py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
              100% Open Source
            </p>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Built for the community.
            </h2>
            <p className="mb-8 max-w-md text-muted-foreground">
              TruckConfigurator is and always will be free and open source.
              Together, we&apos;re building the future of ETS2 modding.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>

          {/* GitHub Ring Graphic */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-64 w-64">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 blur-sm" />
              
              {/* Main ring with particles */}
              <div className="absolute inset-4 rounded-full border-2 border-primary/60">
                {/* Animated particles around ring */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-primary"
                    style={{
                      top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 12)}%`,
                      left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 12)}%`,
                      transform: "translate(-50%, -50%)",
                      opacity: 0.3 + (i % 3) * 0.2,
                    }}
                  />
                ))}
              </div>
              
              {/* Inner ring */}
              <div className="absolute inset-12 rounded-full border border-primary/40" />
              
              {/* Center GitHub icon area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Github className="h-10 w-10 text-primary" />
                </div>
              </div>

              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
