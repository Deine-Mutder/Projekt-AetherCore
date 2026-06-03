"use client"

import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const BOKEH = [
  { x: 8,  y: 12, r: 52, o: 0.28, d: 7.2 },
  { x: 18, y: 55, r: 68, o: 0.22, d: 9.1 },
  { x: 4,  y: 75, r: 44, o: 0.18, d: 6.5 },
  { x: 72, y: 8,  r: 38, o: 0.20, d: 8.3 },
  { x: 85, y: 30, r: 56, o: 0.25, d: 7.8 },
  { x: 92, y: 68, r: 72, o: 0.20, d: 10.2 },
  { x: 78, y: 82, r: 48, o: 0.16, d: 9.6 },
  { x: 55, y: 5,  r: 32, o: 0.18, d: 6.9 },
  { x: 30, y: 20, r: 28, o: 0.15, d: 8.7 },
  { x: 62, y: 45, r: 36, o: 0.12, d: 7.4 },
  { x: 45, y: 78, r: 42, o: 0.14, d: 9.0 },
  { x: 15, y: 35, r: 24, o: 0.16, d: 8.1 },
  { x: 88, y: 50, r: 30, o: 0.13, d: 7.6 },
  { x: 35, y: 60, r: 22, o: 0.10, d: 6.8 },
]

const STARS = [
  { x: 12, y: 8,  d: 2.1 }, { x: 25, y: 15, d: 3.4 }, { x: 38, y: 5,  d: 2.8 },
  { x: 52, y: 12, d: 1.9 }, { x: 67, y: 7,  d: 3.1 }, { x: 78, y: 18, d: 2.5 },
  { x: 88, y: 10, d: 2.9 }, { x: 95, y: 25, d: 1.7 }, { x: 5,  y: 30, d: 3.6 },
  { x: 20, y: 42, d: 2.3 }, { x: 33, y: 35, d: 1.8 }, { x: 48, y: 28, d: 3.0 },
  { x: 60, y: 38, d: 2.2 }, { x: 73, y: 32, d: 2.7 }, { x: 82, y: 42, d: 1.6 },
  { x: 90, y: 38, d: 3.3 }, { x: 10, y: 55, d: 2.0 }, { x: 28, y: 58, d: 2.8 },
  { x: 42, y: 50, d: 1.9 }, { x: 57, y: 55, d: 3.2 }, { x: 70, y: 52, d: 2.4 },
  { x: 85, y: 60, d: 1.8 }, { x: 6,  y: 68, d: 2.6 }, { x: 22, y: 72, d: 3.0 },
  { x: 36, y: 65, d: 2.1 }, { x: 50, y: 70, d: 1.7 }, { x: 64, y: 68, d: 2.9 },
  { x: 76, y: 75, d: 2.3 }, { x: 92, y: 72, d: 1.5 }, { x: 15, y: 82, d: 2.7 },
  { x: 30, y: 85, d: 3.1 }, { x: 45, y: 80, d: 2.0 }, { x: 58, y: 88, d: 1.8 },
  { x: 72, y: 83, d: 2.5 }, { x: 86, y: 87, d: 3.4 }, { x: 96, y: 15, d: 1.6 },
  { x: 3,  y: 48, d: 2.2 }, { x: 93, y: 55, d: 2.8 }, { x: 17, y: 22, d: 1.9 },
  { x: 80, y: 28, d: 3.0 },
]

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">

      {/* Animated background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, #b87200 0%, #6b3d00 25%, #1a0d00 55%, #000000 100%)"
        }}/>
        {BOKEH.map((b, i) => (
          <div key={i} className="absolute rounded-full" style={{
            left: `${b.x}%`, top: `${b.y}%`,
            width: `${b.r}px`, height: `${b.r}px`,
            background: `radial-gradient(circle, rgba(255,210,30,${b.o}) 0%, rgba(200,140,0,${b.o * 0.4}) 50%, transparent 100%)`,
            animation: `bokehPulse ${b.d}s ease-in-out infinite`,
            animationDelay: `${(i * 0.7) % b.d}s`,
            transform: "translate(-50%, -50%)",
          }}/>
        ))}
        {STARS.map((s, i) => (
          <div key={i} className="absolute rounded-full bg-yellow-300" style={{
            left: `${s.x}%`, top: `${s.y}%`,
            width: "2px", height: "2px",
            animation: `starTwinkle ${s.d}s ease-in-out infinite`,
            animationDelay: `${(i * 0.31) % s.d}s`,
          }}/>
        ))}
      </div>

      <style>{`
        @keyframes bokehPulse {
          0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.4; transform: translate(-50%, -50%) scale(0.82); }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.9; }
          50%       { opacity: 0.1; }
        }
        @keyframes robotFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
      `}</style>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">

        {/* Avatar – PNG mit mix-blend-mode:screen, schwarzer BG fällt weg */}
        <div style={{ animation: "robotFloat 4s ease-in-out infinite", marginBottom: "0.25rem" }}>
          <Image
            src="/Avatar.png"
            alt="AetherCore Mascot"
            width={280}
            height={280}
            style={{ mixBlendMode: "screen" }}
            priority
          />
        </div>

        <p style={{
          color: "#F5CF23", fontSize: "1.15rem", fontWeight: 600,
          letterSpacing: "0.15em", marginBottom: "2px",
          textShadow: "0 2px 16px rgba(0,0,0,0.9)",
        }}>
          Projekt
        </p>

        <h1 style={{
          color: "#F5CF23",
          fontSize: "clamp(3.2rem, 10.5vw, 6.5rem)",
          fontWeight: 800, lineHeight: 1, letterSpacing: "-0.02em",
          marginBottom: "clamp(1.5rem, 4svh, 2.5rem)",
          textShadow: "0 0 80px rgba(245,207,35,0.5), 0 4px 32px rgba(0,0,0,0.9)",
        }}>
          AetherCore
        </h1>

        <p style={{
          color: "white", fontSize: "1.1rem", maxWidth: "34rem",
          marginBottom: "0.6rem", textShadow: "0 2px 12px rgba(0,0,0,0.9)",
        }}>
          The Next Generation Open-Source Truck Builder
        </p>

        <p style={{
          color: "#a3a3a3", fontSize: "0.95rem", maxWidth: "28rem",
          marginBottom: "2rem", textShadow: "0 2px 10px rgba(0,0,0,0.9)",
        }}>
          Build any Truck you want.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="rounded-full bg-[#f5cf23] px-8 py-6 text-base font-semibold text-black hover:bg-[#d4a800]">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-[#444] bg-transparent px-8 py-6 text-base font-medium text-white hover:bg-[#1a1a1a] hover:text-white">
            <Github className="mr-2 h-4 w-4" /> View on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}