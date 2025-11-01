"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import DesignFlow from "@/components/design-flow"

export default function Bespoke() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 bg-accent py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-foreground mb-4">
              Create Your Bespoke Piece
            </h1>
            <p className="text-lg text-foreground max-w-2xl">
              Work with our master craftspeople to design a jewelry piece that's uniquely yours. From concept to
              creation, we'll guide you through every step.
            </p>
          </div>
        </section>

        {/* Design Flow */}
        <DesignFlow currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
      <Footer />
    </main>
  )
}
