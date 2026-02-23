"use client"

import { useState, useCallback } from "react"
import {
  Search,
  ShoppingCart,
  MapPin,
  ChevronDown,
  Accessibility,
  Bookmark,
  Menu,
  X,
} from "lucide-react"

const topLinks = [
  { label: "SEJA UM REVENDEDOR", href: "#footer" },
  { label: "SEJA UM FRANQUEADO", href: "#footer" },
  { label: "AREA PARA EMPRESAS", href: "#footer" },
  { label: "NOSSOS HOTEIS", href: "#" },
  { label: "CACAU PARK", href: "#" },
  { label: "GRUPO PLAYCENTER", href: "#" },
]

const categories = [
  { name: "Chocolate", href: "#cremosos" },
  { name: "Biscoito", href: "#" },
  { name: "Cestas e Presentes", href: "#momentos" },
  { name: "Pascoa", href: "#pascoa" },
  { name: "Lifestyle", href: "#linhas" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [cartCount] = useState(0)
  const [cartOpen, setCartOpen] = useState(false)

  const smoothScroll = useCallback((targetId: string) => {
    if (targetId === "#") return
    const el = document.querySelector(targetId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileMenuOpen(false)
    }
  }, [])

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (searchQuery.trim()) {
        const sections = document.querySelectorAll("section")
        for (const section of sections) {
          if (section.textContent?.toLowerCase().includes(searchQuery.toLowerCase())) {
            section.scrollIntoView({ behavior: "smooth", block: "start" })
            setMobileMenuOpen(false)
            return
          }
        }
        alert(`Nenhum resultado encontrado para "${searchQuery}"`)
      }
    },
    [searchQuery]
  )

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-[#2d1810] text-[#d4c4b0] text-xs lg:flex items-center justify-center gap-6 py-2 px-4">
        <button className="flex items-center gap-1 hover:text-white transition-colors">
          <Accessibility className="h-3.5 w-3.5" />
          <span>ACESSIBILIDADE</span>
          <ChevronDown className="h-3 w-3" />
        </button>
        {topLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => smoothScroll(link.href)}
            className="hover:text-white transition-colors border-l border-[#4a3528] pl-6"
          >
            {link.label}
          </button>
        ))}
        <div className="flex items-center gap-6 ml-auto">
          <button
            onClick={() => smoothScroll("#footer")}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <MapPin className="h-3.5 w-3.5" />
            ENCONTRE UMA LOJA
          </button>
          <button
            onClick={() => smoothScroll("#momentos")}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            VALE PRESENTE
          </button>
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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex-shrink-0"
          >
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
          </button>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar Produto"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-[#1a1a1a] rounded-md py-2.5 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b5b4f] hover:text-[#5c3a21]"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Right actions */}
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="hidden lg:flex items-center gap-1.5 text-[#f5efe6] text-sm">
              <MapPin className="h-4 w-4" />
              <span>{'Cacau Show - SP'}</span>
              <button
                onClick={() => smoothScroll("#footer")}
                className="font-bold ml-1 hover:text-[#d4a574] transition-colors"
              >
                ALTERAR
              </button>
            </div>

            {/* Cart */}
            <div className="relative">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="relative text-[#f5efe6] hover:text-[#d4a574] transition-colors"
                aria-label="Carrinho"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1.5 -right-1.5 bg-[#c53030] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
              {cartOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl border border-[#e0d5c7] p-4 z-50">
                  <p className="text-sm text-[#6b5b4f] text-center py-4">
                    Seu carrinho esta vazio
                  </p>
                  <button
                    onClick={() => {
                      smoothScroll("#pascoa")
                      setCartOpen(false)
                    }}
                    className="w-full bg-[#4a8c3f] text-white text-sm font-semibold py-2.5 rounded-md hover:bg-[#3d7534] transition-colors"
                  >
                    VER PRODUTOS
                  </button>
                </div>
              )}
            </div>
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
                onClick={() => smoothScroll(cat.href)}
                className="flex items-center gap-1 px-4 py-3 text-sm text-[#5c3a21] hover:bg-[#e0d5c7] transition-colors rounded-t-md"
              >
                {cat.name}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => smoothScroll("#cremosos")}
              className="flex items-center gap-1.5 text-sm text-[#5c3a21] hover:text-[#2d1810] transition-colors"
            >
              laCreme
              <Bookmark className="h-4 w-4" />
            </button>
            <button
              onClick={() => smoothScroll("#sobre")}
              className="bg-[#c53030] text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 hover:bg-[#a52020] transition-colors"
            >
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
            <form onSubmit={handleSearch} className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Buscar Produto"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-[#1a1a1a] rounded-md py-2.5 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b5b4f]">
                <Search className="h-5 w-5" />
              </button>
            </form>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => smoothScroll(cat.href)}
                className="block w-full text-left py-3 text-sm text-[#5c3a21] border-b border-[#e0d5c7] hover:text-[#2d1810]"
              >
                {cat.name}
              </button>
            ))}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => {
                  smoothScroll("#sobre")
                  setMobileMenuOpen(false)
                }}
                className="bg-[#c53030] text-white text-sm font-semibold px-4 py-2 rounded-full"
              >
                Cacau Lovers
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
