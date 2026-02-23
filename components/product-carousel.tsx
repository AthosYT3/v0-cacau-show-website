"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Heart, Minus, Plus, ShoppingCart } from "lucide-react"
import Image from "next/image"

export interface Product {
  id: number
  name: string
  image: string
  originalPrice: string
  currentPrice: string
  unit: string
  cacaus: number
  badge?: string
  badgeColor?: string
  promoBadge?: string
  unavailable?: boolean
  preVenda?: boolean
}

interface ProductCarouselProps {
  title: string
  products: Product[]
}

function ProductCard({ product }: { product: Product }) {
  const [qty, setQty] = useState(1)
  const [liked, setLiked] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#e8e0d6] flex flex-col min-w-[260px] w-[260px] lg:w-auto lg:min-w-0 flex-shrink-0 lg:flex-shrink relative overflow-hidden">
      {product.preVenda && (
        <div className="absolute top-3 left-3 bg-[#3a7d34] text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 z-10">
          <span className="w-3 h-3 bg-white/30 rounded-sm flex items-center justify-center text-[8px]">P</span>
          PRE-VENDA
        </div>
      )}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 z-10 text-[#b0a090] hover:text-[#c53030] transition-colors"
        aria-label="Favoritar"
      >
        <Heart className={`h-5 w-5 ${liked ? "fill-[#c53030] text-[#c53030]" : ""}`} />
      </button>

      {/* Product image */}
      <div className="flex items-center justify-center p-4 h-44">
        <div className="relative w-32 h-36">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Product info */}
      <div className="px-4 pb-4 flex flex-col flex-1">
        <h3 className="text-sm text-[#1a1a1a] font-sans leading-tight line-clamp-2 mb-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Badges */}
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span
            className="text-white text-[10px] font-bold px-2 py-1 rounded-full"
            style={{ backgroundColor: product.badgeColor || "#4a8c3f" }}
          >
            {product.cacaus} {'CACAU' + (product.cacaus !== 1 ? 'S' : '')}
          </span>
          {product.promoBadge && (
            <span className="text-[#5c3a21] text-[10px] font-semibold border border-[#d4a574] px-2 py-1 rounded-full bg-[#f5efe6]">
              {product.promoBadge}
            </span>
          )}
        </div>

        {/* Prices */}
        <div className="mb-3">
          <span className="text-xs text-[#999] line-through block">{product.originalPrice}</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xs text-[#5c3a21]">R$</span>
            <span className="text-xl font-bold text-[#1a1a1a]">{product.currentPrice}</span>
            <span className="text-xs text-[#999]">/{product.unit}</span>
          </div>
        </div>

        {/* Quantity and Cart */}
        {!product.unavailable ? (
          <>
            <div className="flex items-center justify-end gap-3 mb-3">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-7 h-7 flex items-center justify-center text-[#5c3a21] hover:bg-[#f0ebe3] rounded transition-colors"
                aria-label="Diminuir quantidade"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm font-semibold text-[#1a1a1a] min-w-[1.5rem] text-center">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-7 h-7 flex items-center justify-center text-[#5c3a21] hover:bg-[#f0ebe3] rounded transition-colors"
                aria-label="Aumentar quantidade"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button className="w-full bg-[#4a8c3f] hover:bg-[#3d7534] text-white text-sm font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition-colors mt-auto">
              ADICIONAR AO CARRINHO
              <ShoppingCart className="h-4 w-4" />
            </button>
          </>
        ) : (
          <button className="w-full bg-[#e8e0d6] text-[#999] text-sm font-semibold py-3 rounded-md mt-auto cursor-not-allowed">
            PRODUTO INDISPONIVEL
          </button>
        )}
      </div>
    </div>
  )
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollPos, setScrollPos] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const scrollAmount = 280
    const newPos =
      direction === "left"
        ? Math.max(0, scrollPos - scrollAmount)
        : scrollPos + scrollAmount
    scrollRef.current.scrollTo({ left: newPos, behavior: "smooth" })
    setScrollPos(newPos)
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <h2 className="font-serif text-xl lg:text-2xl font-bold text-[#1a1a1a] mb-6">{title}</h2>

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
          onScroll={(e) => setScrollPos(e.currentTarget.scrollLeft)}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
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

      {/* Dots indicator (mobile) */}
      <div className="flex items-center justify-center gap-2 mt-4 lg:hidden">
        {products.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === 0 ? "bg-[#5c3a21]" : "bg-[#d4c4b0]"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
