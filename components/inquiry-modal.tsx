"use client"

import { useState } from "react"

interface InquiryModalProps {
    isOpen: boolean
    onClose: () => void
    productName: string
    productImage: string
}

export default function InquiryModal({ isOpen, onClose, productName, productImage }: InquiryModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<null | "sending" | "sent" | "error">(null)

  if (!isOpen) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName,
          productImage,
          name,
          email,
          phone,
        }),
      })

      if (!res.ok) throw new Error("Request failed")

      setStatus("sent")
      // optional: clear form
      setName("")
      setEmail("")
      setPhone("")
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* modal card */}
      <div className="relative bg-background text-foreground rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-playfair font-bold mb-2">
          Request Price
        </h2>
        <p className="text-sm text-foreground/80 mb-6">
          You're inquiring about: <span className="font-semibold">{productName}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* status messages */}
          {status === "sent" && (
            <p className="text-sm text-green-600">
              Thank you. We'll contact you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}

          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-border text-foreground hover:bg-accent transition-colors text-sm rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-4 py-2 bg-primary text-background hover:bg-opacity-90 transition-all text-sm rounded-md"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}