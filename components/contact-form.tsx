"use client";

import type React from "react";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consultationType: "general",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            consultationType: "general",
          });
        }, 3000);
      } else {
        console.error("Error submitting form:", await res.text());
        alert(
          "There was an issue sending your message. Please try again later."
        );
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted && (
        <div className="p-6 border border-primary rounded-xl bg-accent/40 text-center transition-all duration-500">
          <h3 className="text-2xl font-playfair font-semibold text-primary mb-2">
            Message Sent Successfully
          </h3>
          <p className="text-foreground font-cormorant text-lg">
            Thank you for reaching out to{" "}
            <span className="font-semibold">Lucentix Jewels</span>.<br />
            Our team will connect with you within 24 hours.
          </p>
        </div>
      )}

      <div>
        <label className="block text-foreground font-cormorant mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
          placeholder="Your name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-foreground font-cormorant mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-foreground font-cormorant mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label className="block text-foreground font-cormorant mb-2">
          Consultation Type
        </label>
        <select
          name="consultationType"
          value={formData.consultationType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
        >
          <option value="general">General Inquiry</option>
          <option value="custom">Custom Design</option>
          <option value="heirloom">Heirloom Transformation</option>
          <option value="repair">Repair & Restoration</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-foreground font-cormorant mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
          placeholder="How can we help?"
        />
      </div>

      <div>
        <label className="block text-foreground font-cormorant mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary resize-none"
          placeholder="Tell us about your inquiry..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-3 bg-primary text-background border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 ease-in-out font-cormorant text-lg cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}
