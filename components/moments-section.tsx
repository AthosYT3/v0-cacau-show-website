"use client"

import Image from "next/image"

const moments = [
  {
    image: "/images/moment-curtir.jpg",
    label: "PARA CURTIR SEU MOMENTO",
  },
  {
    image: "/images/moment-colecionar.jpg",
    label: "COLECIONAVEIS",
  },
  {
    image: "/images/moment-levar.jpg",
    label: "PARA LEVAR COM VOCE",
  },
  {
    image: "/images/moment-presente.jpg",
    label: "PRESENTEAVEIS",
  },
]

export function MomentsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-[#1a1a1a]">
          Todos os Momentos Combinam com Cacau Show
        </h2>
        <p className="text-sm text-[#c53030] mt-1">Momentos Doces</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {moments.map((moment) => (
          <a
            key={moment.label}
            href="#"
            className="group flex flex-col rounded-xl overflow-hidden bg-white shadow-sm border border-[#e8e0d6]"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={moment.image}
                alt={moment.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-3">
              <button className="w-full bg-[#4a8c3f] hover:bg-[#3d7534] text-white text-xs lg:text-sm font-semibold py-2.5 rounded-md transition-colors text-center">
                {moment.label}
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
