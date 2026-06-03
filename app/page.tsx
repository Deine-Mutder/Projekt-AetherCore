import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { OpenSource } from "@/components/landing/open-source"
import { CommunityCTA } from "@/components/landing/community-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Features />
      <OpenSource />
      <CommunityCTA />
      <Footer />
    </main>
  )
}
