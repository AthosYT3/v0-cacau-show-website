"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const banners = [
  {
    image: "/images/banner-pascoa.webp",
    alt: "Pascoa Cacau Show - A maior Pascoa do Brasil",
  },
  {
    image: "/images/banner-lacreme.webp",
    alt: "laCreme - Oferta para voce se derreter. Na compra de 2 tabletes laCreme de 100g, o segundo sai por R$10",
  },
]

export function HeroBanner() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 mt-4">
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banners.map((banner, i) => (
            <div key={i} className="w-full flex-shrink-0 relative aspect-[16/7]">
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#c53030] hover:bg-white transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#c53030] hover:bg-white transition-colors"
          aria-label="Proximo"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-[#5c3a21]" : "bg-[#d4c4b0]"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
