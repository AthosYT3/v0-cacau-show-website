"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const productLines = [
  { name: "LaNut", image: "/images/line-lanut.jpg" },
  { name: "laCreme", image: "/images/line-lacreme.jpg" },
  { name: "Especiais", image: "/images/line-especiais.jpg" },
  { name: "Dreams", image: "/images/line-dreams.jpg" },
]

export function ProductLines() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentDot, setCurrentDot] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const scrollAmount = 320
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      setCurrentDot(Math.max(0, currentDot - 1))
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      setCurrentDot(Math.min(productLines.length - 1, currentDot + 1))
    }
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-[#1a1a1a]">Nossas Linhas</h2>
        <p className="text-sm text-[#6b5b4f] mt-1">Classicos</p>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#c53030] hover:shadow-lg transition-shadow"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible"
        >
          {productLines.map((line) => (
            <a
              key={line.name}
              href="#"
              className="relative flex-shrink-0 w-[280px] lg:w-auto aspect-[3/4] rounded-xl overflow-hidden group"
            >
              <Image
                src={line.image}
                alt={line.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-white font-serif text-2xl font-bold drop-shadow-lg">
                {line.name}
              </h3>
            </a>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#c53030] hover:shadow-lg transition-shadow"
          aria-label="Proximo"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {productLines.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentDot(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === currentDot ? "bg-[#5c3a21]" : "bg-[#d4c4b0]"
            }`}
            aria-label={`Pagina ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
