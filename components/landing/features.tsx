import { Check } from "lucide-react"

const features = [
  "Cross-DLC Parts",
  "Brand Mixing",
  "Live Preview",
  "One-Click Export",
  "All Truck Models",
  "Community Presets",
]

const brands = ["Scania", "Volvo", "MAN", "DAF", "Mercedes", "Renault"]

const parts = [
  "Bumpers",
  "Sideskirts",
  "Exhausts",
  "Roof Bars",
  "Sun Visors",
  "Mirrors",
  "Lights",
  "Chassis",
]

export function Features() {
  return (
    <section className="relative py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
          Built for Modders
        </p>

        {/* Heading */}
        <h2 className="mb-12 max-w-md text-3xl font-bold text-foreground sm:text-4xl">
          Build your perfect truck, your way.
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* App Mockup */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border/50 bg-card/50 p-1 backdrop-blur-sm">
              <div className="rounded-lg bg-background/80 p-4">
                {/* Mockup header */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-muted-foreground">
                    TruckConfigurator
                  </span>
                </div>

                {/* App layout mockup */}
                <div className="grid grid-cols-12 gap-3">
                  {/* Left sidebar - Parts list */}
                  <div className="col-span-3 rounded-lg border border-border/50 bg-secondary/50 p-3">
                    <p className="mb-2 text-xs font-medium text-muted-foreground">
                      Parts
                    </p>
                    <div className="space-y-1">
                      {parts.map((part) => (
                        <div
                          key={part}
                          className="rounded bg-muted/50 px-2 py-1 text-xs text-foreground"
                        >
                          {part}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center - Preview area */}
                  <div className="col-span-6 flex items-center justify-center rounded-lg border border-border/50 bg-muted/30 p-4">
                    <div className="text-center">
                      <div className="mx-auto mb-2 h-16 w-24 rounded bg-primary/20" />
                      <p className="text-xs text-muted-foreground">
                        3D Preview
                      </p>
                    </div>
                  </div>

                  {/* Right sidebar - Brand selector */}
                  <div className="col-span-3 rounded-lg border border-border/50 bg-secondary/50 p-3">
                    <p className="mb-2 text-xs font-medium text-muted-foreground">
                      Brands
                    </p>
                    <div className="space-y-1">
                      {brands.map((brand) => (
                        <div
                          key={brand}
                          className="rounded bg-muted/50 px-2 py-1 text-xs text-foreground"
                        >
                          {brand}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom stats bar */}
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {[
                    { label: "Parts", value: "24" },
                    { label: "DLCs", value: "720" },
                    { label: "Configs", value: "3K+" },
                    { label: "Users", value: "2.2K" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg bg-primary/10 p-2 text-center"
                    >
                      <p className="text-lg font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="flex items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
