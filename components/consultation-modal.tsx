"use client";

import { useState } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("");

  const [status, setStatus] = useState<null | "sending" | "sent" | "error">(
    null
  );

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !phone || !date || !time) {
      alert("Please fill out all fields");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, date, time, subject }),
      });

      if (!res.ok) throw new Error("Failed to send request");

      setStatus("sent");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setDate("");
      setTime("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      <div className="relative bg-background text-foreground rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-playfair font-bold mb-4">
          Book a Consultation
        </h2>
        <p className="text-sm text-foreground/80 mb-6">
          Select your preferred date, time, and enter your contact details
          below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="date"
            className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="time"
            className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject (e.g. Engagement Ring Design)"
            className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          {status === "sent" && (
            <p className="text-green-600 text-center">
              Your consultation has been booked. Check your email!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">
              Something went wrong. Please try again.
            </p>
          )}

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-border text-foreground hover:bg-accent rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-4 py-2 bg-primary text-background rounded-md hover:bg-opacity-90"
            >
              {status === "sending" ? "Booking..." : "Confirm Booking"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
