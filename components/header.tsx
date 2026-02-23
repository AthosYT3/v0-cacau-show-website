"use client"

import { useState } from "react"
import {
  Search,
  ShoppingCart,
  MapPin,
  User,
  ChevronDown,
  Accessibility,
  Bookmark,
  Menu,
  X,
} from "lucide-react"

const topLinks = [
  "ACESSIBILIDADE",
  "SEJA UM REVENDEDOR",
  "SEJA UM FRANQUEADO",
  "AREA PARA EMPRESAS",
  "NOSSOS HOTEIS",
  "CACAU PARK",
  "GRUPO PLAYCENTER",
]

const categories = [
  { name: "Chocolate", hasDropdown: true },
  { name: "Biscoito", hasDropdown: true },
  { name: "Cestas e Presentes", hasDropdown: true },
  { name: "Pascoa", hasDropdown: true },
  { name: "Lifestyle", hasDropdown: true },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="hidden bg-[#2d1810] text-[#d4c4b0] text-xs lg:flex items-center justify-center gap-6 py-2 px-4">
        <button className="flex items-center gap-1 hover:text-white transition-colors">
          <Accessibility className="h-3.5 w-3.5" />
          <span>ACESSIBILIDADE</span>
          <ChevronDown className="h-3 w-3" />
        </button>
        {topLinks.slice(1).map((link) => (
          <a
            key={link}
            href="#"
            className="hover:text-white transition-colors border-l border-[#4a3528] pl-6"
          >
            {link}
          </a>
        ))}
        <div className="flex items-center gap-6 ml-auto">
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
            <MapPin className="h-3.5 w-3.5" />
            ENCONTRE UMA LOJA
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
            VALE PRESENTE
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#3d2415] py-3 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden text-[#f5efe6]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <div className="flex flex-col items-center text-[#f5efe6]">
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-8 rounded-full border-2 border-[#d4a574] flex items-center justify-center text-[#d4a574] font-serif font-bold text-sm">
                  CS
                </div>
                <span className="font-serif text-xl lg:text-2xl font-bold tracking-wide">
                  CacauShow
                </span>
              </div>
              <div className="flex gap-0.5 mt-0.5">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="text-[#d4a574] text-[8px]">
                    {"*"}
                  </span>
                ))}
              </div>
            </div>
          </a>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar Produto"
                className="w-full bg-white text-[#1a1a1a] rounded-md py-2.5 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b5b4f] hover:text-[#5c3a21]">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 lg:gap-5">
            <button className="hidden lg:flex items-center gap-2 bg-transparent border border-[#d4c4b0] text-[#f5efe6] rounded-full px-4 py-2 text-sm hover:bg-[#4a3528] transition-colors">
              <User className="h-4 w-4" />
              ENTRAR
            </button>

            <div className="hidden lg:flex items-center gap-1.5 text-[#f5efe6] text-sm">
              <MapPin className="h-4 w-4" />
              <span>{'Cacau Show - SP'}</span>
              <button className="font-bold ml-1 hover:text-[#d4a574] transition-colors">ALTERAR</button>
            </div>

            <button className="relative text-[#f5efe6] hover:text-[#d4a574] transition-colors" aria-label="Carrinho">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#c53030] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Category navigation */}
      <nav className="bg-[#f5efe6] border-b border-[#e0d5c7] hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-0">
          <div className="flex items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="flex items-center gap-1 px-4 py-3 text-sm text-[#5c3a21] hover:bg-[#e0d5c7] transition-colors rounded-t-md"
              >
                {cat.name}
                {cat.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-sm text-[#5c3a21] hover:text-[#2d1810] transition-colors">
              laCreme
              <Bookmark className="h-4 w-4" />
            </button>
            <button className="bg-[#c53030] text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 hover:bg-[#a52020] transition-colors">
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                C
              </span>
              Cacau Lovers
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f5efe6] border-b border-[#e0d5c7]">
          <div className="px-4 py-3">
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Buscar Produto"
                className="w-full bg-white text-[#1a1a1a] rounded-md py-2.5 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b5b4f]">
                <Search className="h-5 w-5" />
              </button>
            </div>
            {categories.map((cat) => (
              <a
                key={cat.name}
                href="#"
                className="block py-3 text-sm text-[#5c3a21] border-b border-[#e0d5c7] hover:text-[#2d1810]"
              >
                {cat.name}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-4">
              <button className="flex items-center gap-2 bg-[#5c3a21] text-white rounded-full px-4 py-2 text-sm">
                <User className="h-4 w-4" />
                ENTRAR
              </button>
              <button className="bg-[#c53030] text-white text-sm font-semibold px-4 py-2 rounded-full">
                Cacau Lovers
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
