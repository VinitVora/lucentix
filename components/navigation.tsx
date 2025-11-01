"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ConsultationModal from "@/components/consultation-modal";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className="text-2xl font-playfair font-bold text-foreground"
            >
              Lucentix
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <Link href="/about" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">About</Link>
              <Link href="/collection" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">Collection</Link>
              <Link href="/bespoke" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">Bespoke</Link>
              <Link href="/contact" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">Contact</Link>

              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-colors cursor-pointer"
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-4">
              <Link href="/about" className="block">About</Link>
              <Link href="/collection" className="block">Collection</Link>
              <Link href="/bespoke" className="block">Bespoke</Link>
              <Link href="/contact" className="block">Contact</Link>
              <button
                onClick={() => setShowModal(true)}
                className="w-full px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-colors"
              >
                Book Consultation
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Modal outside of nav */}
      <ConsultationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
