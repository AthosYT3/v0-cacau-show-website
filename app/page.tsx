import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { ProductCarousel } from "@/components/product-carousel"
import { ProductLines } from "@/components/product-lines"
import { MomentsSection } from "@/components/moments-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import type { Product } from "@/components/product-carousel"

const easterProducts: Product[] = [
  {
    id: 1,
    name: "Ovo de Pascoa ao Leite Pelucia Snoopy Astronauta 170g",
    image: "/images/egg-snoopy.jpg",
    originalPrice: "R$ 129,99",
    currentPrice: "119,99",
    unit: "un",
    cacaus: 5,
    badgeColor: "#4a8c3f",
  },
  {
    id: 2,
    name: "Ovo de Pascoa ao Leite Pelucia Animadinha com LED Ursinhos...",
    image: "/images/egg-animadinha.jpg",
    originalPrice: "R$ 139,99",
    currentPrice: "129,99",
    unit: "un",
    cacaus: 6,
    badgeColor: "#4a8c3f",
  },
  {
    id: 3,
    name: "Ovo de Pascoa ao Leite Pelucia Zangadinho com LED Ursinhos...",
    image: "/images/egg-zangadinho.jpg",
    originalPrice: "R$ 139,99",
    currentPrice: "129,99",
    unit: "un",
    cacaus: 6,
    badgeColor: "#4a8c3f",
  },
  {
    id: 4,
    name: "Ovo de Pascoa ao Leite Pelucia Batman 170g",
    image: "/images/egg-batman.jpg",
    originalPrice: "R$ 84,99",
    currentPrice: "79,99",
    unit: "un",
    cacaus: 3,
    badgeColor: "#4a8c3f",
    preVenda: true,
  },
]

const cremeProducts: Product[] = [
  {
    id: 5,
    name: "Tablete laCreme de Chocolate ao Leite 100g",
    image: "/images/lacreme-leite.jpg",
    originalPrice: "R$ 21,29",
    currentPrice: "19,99",
    unit: "un",
    cacaus: 0,
    badgeColor: "#4a8c3f",
    promoBadge: "O Segundo sai por R$10",
    unavailable: true,
  },
  {
    id: 6,
    name: "Tablete laCreme de Chocolate Branco com Pistache 100g",
    image: "/images/lacreme-pistache.jpg",
    originalPrice: "R$ 24,49",
    currentPrice: "22,99",
    unit: "un",
    cacaus: 1,
    badgeColor: "#4a8c3f",
    promoBadge: "O Segundo sai por R$10",
  },
  {
    id: 7,
    name: "Tablete laCreme Gold de Chocolate Branco 100g",
    image: "/images/lacreme-gold.jpg",
    originalPrice: "R$ 21,29",
    currentPrice: "19,99",
    unit: "un",
    cacaus: 0,
    badgeColor: "#4a8c3f",
    promoBadge: "O Segundo sai por R$10",
  },
  {
    id: 8,
    name: "Tablete laCreme de Chocolate Branco 100g",
    image: "/images/lacreme-branco.jpg",
    originalPrice: "R$ 21,29",
    currentPrice: "19,99",
    unit: "un",
    cacaus: 0,
    badgeColor: "#4a8c3f",
    promoBadge: "O Segundo sai por R$10",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <main>
        <HeroBanner />
        <ProductCarousel title="Especial de Pascoa" products={easterProducts} />
        <ProductCarousel title="Cremosos em Cada Detalhe" products={cremeProducts} />
        <ProductLines />
        <MomentsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
