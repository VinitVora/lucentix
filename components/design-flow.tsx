"use client";

import { useState } from "react";

interface DesignFlowProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const steps = [
  {
    title: "Choose Type",
    description: "Select the type of jewelry you'd like to create",
    options: ["Ring", "Necklace", "Bracelet", "Earrings", "Pendant"],
  },
  {
    title: "Select Metal",
    description: "Choose your preferred Metal",
    options: ["Gold", "Silver"],
  },
  {
    title: "Pick Metal Quality",
    description: "Choose your preferred Metal Quality",
    options: ["10K Gold", "14K Gold", "18K Gold", "22K Gold", "999 Silver", "Sterling Silver (925)"],
  },
  {
    title: "Pick Metal Finish",
    description: "Choose your preferred Metal Finish",
    options: ["White Gold", "Rose Gold", "Yellow Gold", "Silver"],
  },
  {
    title: "Pick Gemstone",
    description: "Select your center stone and any accents",
    options: ["Diamond", "Emerald", "Sapphire", "Ruby", "Pearl", "Custom"],
  },
  {
    title: "Design Details",
    description: "Customize the design elements and style",
    options: ["Classic", "Modern", "Vintage", "Art Deco", "Minimalist", "Regal"],
  },
  {
    title: "Review & Consult",
    description: "Review your design and schedule a consultation",
    options: [],
  },
];

export default function DesignFlow({ currentStep, setCurrentStep }: DesignFlowProps) {
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<null | "sending" | "sent" | "error">(null);

  const handleSelect = (stepIndex: number, option: string) => {
    setSelections((prev) => ({
      ...prev,
      [stepIndex]: option,
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!name || !email || !phone) {
      alert("Please fill in your name, email, and phone number.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/bespoke", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          selections: Object.fromEntries(
            Object.entries(selections).map(([index, value]) => [steps[Number(index)].title, value])
          ),
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("sent");
      setName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      console.error("Error submitting design:", err);
      setStatus("error");
    }
  };

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-1 mx-1 rounded-full transition-colors ${
                  index <= currentStep ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-foreground">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>

        {/* Step Content */}
        <div className="bg-accent rounded-lg p-12 mb-12">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">{step.title}</h2>
          <p className="text-lg text-foreground mb-8">{step.description}</p>

          {isLastStep ? (
            <div className="space-y-8">
              <div className="bg-background rounded-lg p-8">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">Your Design Summary</h3>
                <div className="space-y-4">
                  {Object.entries(selections).map(([stepIndex, selection]) => (
                    <div key={stepIndex} className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-foreground font-cormorant">{steps[Number(stepIndex)].title}</span>
                      <span className="text-primary font-bold">{selection}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              {status === "sent" && (
                <p className="text-green-600 text-center">
                  Thank you! We’ve received your design and will contact you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center">
                  Something went wrong. Please try again later.
                </p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {step.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(currentStep, option)}
                  className={`p-6 rounded-lg border-2 transition-all text-center font-cormorant text-lg ${
                    selections[currentStep] === option
                      ? "border-primary bg-primary text-background"
                      : "border-border bg-background text-foreground hover:border-primary"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <div className="text-center text-muted">
            {currentStep + 1} / {steps.length}
          </div>

          {isLastStep ? (
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="px-8 py-3 bg-primary text-background hover:bg-opacity-90 transition-all"
            >
              {status === "sending" ? "Sending..." : "Submit Design"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!selections[currentStep]}
              className="px-8 py-3 bg-primary text-background hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
}