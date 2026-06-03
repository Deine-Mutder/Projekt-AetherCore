import { Check } from "lucide-react"

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
        {/* Section label - orange uppercase */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5a623]">
          Built for Modders
        </p>

        {/* Heading - white */}
        <h2 className="mb-16 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
          Build your perfect truck,<br />your way.
        </h2>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Dashboard Mockup - exact style from image */}
          <div className="relative">
            {/* Main dashboard container */}
            <div className="overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#0f0f0f]">
              {/* Top bar with app name */}
              <div className="flex items-center gap-2 border-b border-[#2a2a2a] px-4 py-3">
                <div className="flex h-5 w-5 items-center justify-center">
                  <svg viewBox="0 0 20 20" className="h-4 w-4">
                    <circle cx="10" cy="10" r="8" fill="#f5a623" />
                    <circle cx="8" cy="9" r="1.5" fill="#3b82f6" />
                    <circle cx="12" cy="9" r="1.5" fill="#3b82f6" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-white">TruckConfigurator</span>
              </div>

              <div className="flex">
                {/* Left sidebar */}
                <div className="w-28 border-r border-[#2a2a2a] bg-[#0a0a0a] p-3">
                  <div className="space-y-1">
                    {["Bumpers", "Sideskirts", "Exhausts", "Lights", "Mirrors", "Chassis"].map((item, i) => (
                      <div
                        key={item}
                        className={`rounded px-2 py-1.5 text-xs ${
                          i === 0 ? "bg-[#1a1a1a] text-white" : "text-[#666]"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main content area */}
                <div className="flex-1 p-4">
                  {/* Dashboard header */}
                  <div className="mb-4 text-sm font-medium text-white">Dashboard</div>

                  {/* Stats row */}
                  <div className="mb-4 grid grid-cols-4 gap-3">
                    {[
                      { value: "24", label: "Parts", color: "text-[#f5a623]" },
                      { value: "720", label: "DLCs", color: "text-[#22c55e]" },
                      { value: "3M+67%", label: "Downloads", color: "text-white" },
                      { value: "2.2M", label: "Users", color: "text-white" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-lg bg-[#1a1a1a] p-3">
                        <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                        <div className="text-[10px] text-[#666]">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Table header */}
                  <div className="mb-2 text-xs font-medium text-white">Recent Configs</div>

                  {/* Table */}
                  <div className="rounded-lg border border-[#2a2a2a] bg-[#0f0f0f]">
                    <div className="grid grid-cols-4 gap-2 border-b border-[#2a2a2a] px-3 py-2 text-[10px] text-[#666]">
                      <span>Name</span>
                      <span>Brand</span>
                      <span>Parts</span>
                      <span>Status</span>
                    </div>
                    {[
                      { name: "Scania Ultimate", brand: "Scania", parts: "24", status: "Active" },
                      { name: "Volvo Classic", brand: "Volvo", parts: "18", status: "Draft" },
                      { name: "MAN Custom", brand: "MAN", parts: "32", status: "Active" },
                    ].map((row) => (
                      <div key={row.name} className="grid grid-cols-4 gap-2 border-b border-[#2a2a2a] px-3 py-2 text-[10px] last:border-0">
                        <span className="text-white">{row.name}</span>
                        <span className="text-[#888]">{row.brand}</span>
                        <span className="text-[#888]">{row.parts}</span>
                        <span className={row.status === "Active" ? "text-[#22c55e]" : "text-[#888]"}>{row.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right panel - Chat/AI */}
                <div className="w-48 border-l border-[#2a2a2a] bg-[#0a0a0a] p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-white">AI Assistant</span>
                    <button className="text-[#666] hover:text-white">x</button>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg bg-[#1a1a1a] p-2 text-[10px] text-[#888]">
                      How can I help you today?
                    </div>
                    <div className="rounded-lg bg-[#f5a623]/10 p-2 text-[10px] text-[#f5a623]">
                      Show me compatible parts for my Scania config
                    </div>
                    <div className="rounded-lg bg-[#1a1a1a] p-2 text-[10px] text-[#888]">
                      I found 47 compatible parts across 3 DLCs. Would you like me to filter by category?
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 rounded bg-[#1a1a1a] px-2 py-1.5 text-[10px] text-white placeholder-[#666] outline-none"
                    />
                    <button className="rounded bg-[#f5a623] px-2 py-1.5">
                      <svg className="h-3 w-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features checklist - right side */}
          <div className="flex items-center lg:justify-end lg:pl-12">
            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10">
                    <Check className="h-3.5 w-3.5 text-[#f5a623]" />
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
