import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OpenSource() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content - Left side */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5a623]">
              100% Open Source
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Built for the community.
            </h2>
            <p className="mb-8 max-w-sm text-[#a3a3a3]">
              TruckConfigurator is and always will be free and open source.
              Together, we&apos;re building the future of ETS2 modding.
            </p>
            <Button 
              variant="outline"
              className="rounded-full border-[#f5a623] bg-transparent px-6 py-5 text-sm font-medium text-[#f5a623] hover:bg-[#f5a623]/10"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>

          {/* GitHub Ring Graphic - Right side */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-72 w-72">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-[#f5a623]/20 blur-3xl" />
              
              {/* Main glowing ring */}
              <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
                {/* Outer ring with gradient */}
                <defs>
                  <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f5a623" stopOpacity="1" />
                    <stop offset="50%" stopColor="#d4890f" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#f5a623" stopOpacity="1" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Main ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="url(#ringGradient)"
                  strokeWidth="3"
                  filter="url(#glow)"
                />
                
                {/* Inner subtle ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#f5a623"
                  strokeWidth="1"
                  opacity="0.3"
                />
                
                {/* Particles around the ring */}
                {[...Array(20)].map((_, i) => {
                  const angle = (i * Math.PI * 2) / 20
                  const radius = 85 + (Math.random() - 0.5) * 20
                  const x = 100 + radius * Math.cos(angle)
                  const y = 100 + radius * Math.sin(angle)
                  const size = 1 + Math.random() * 2
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r={size}
                      fill="#f5a623"
                      opacity={0.3 + Math.random() * 0.5}
                    />
                  )
                })}
              </svg>
              
              {/* Center GitHub icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#0a0a0a]">
                  <Github className="h-12 w-12 text-[#f5a623]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
