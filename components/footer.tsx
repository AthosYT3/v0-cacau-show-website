import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

const institutionalLinks = [
  "Seja um Revendedor",
  "Seja um Franqueado",
  "Area para Empresas",
  "Trabalhe Conosco",
  "Lingua de Gato",
  "Nossas Marcas",
  "Linha Cacao Home",
]

const policyLinks = [
  "Termos de Uso",
  "Politica de Privacidade",
  "Politica de Trocas",
  "FAQ",
  "Regulamentos",
  "SAC",
  "Comunicado Oficial Cacau Show",
]

const footerButtons = [
  "Sobre a Cacau Show",
  "Nossa Fazenda",
  "Instituto Cacau Show",
  "Eureciclo",
]

export function Footer() {
  return (
    <footer className="bg-[#f0ebe3] relative overflow-hidden">
      {/* Top buttons */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-10 pb-6">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center text-[#5c3a21]">
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-8 rounded-full border-2 border-[#d4a574] flex items-center justify-center text-[#d4a574] font-serif font-bold text-sm">
                CS
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide">CacauShow</span>
            </div>
            <div className="flex gap-0.5 mt-0.5">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-[#d4a574] text-[8px]">
                  {"*"}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {footerButtons.map((btn) => (
            <a
              key={btn}
              href="#"
              className="border border-[#d4c4b0] rounded-full px-5 py-2.5 text-sm text-[#5c3a21] hover:bg-[#e0d5c7] transition-colors"
            >
              {btn}
            </a>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Disclaimer */}
          <div className="lg:col-span-1">
            <p className="text-xs text-[#6b5b4f] leading-relaxed mb-4">
              Precos apresentados na loja virtual podem variar de acordo com a regiao. Informacoes sobre
              precos, prazos de validade, estoque e origem podem ser obtidas diretamente nas lojas.
              Consulte a loja para verificar disponibilidade.
            </p>
            <p className="text-xs text-[#6b5b4f] leading-relaxed">
              Precos, estoques, informacoes e condicoes disponiveis no site estao sujeitos a alteracoes sem
              aviso previo. *Precos e produtos do Choco-Outlet sao validos somente para compras realizadas na
              loja virtual sujeito a disponibilidade de estoque.
            </p>
          </div>

          {/* Institutional */}
          <div>
            <h3 className="font-sans text-sm font-bold text-[#5c3a21] uppercase tracking-wide mb-4">
              Institucional
            </h3>
            <ul className="space-y-2.5">
              {institutionalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#6b5b4f] hover:text-[#5c3a21] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-sans text-sm font-bold text-[#5c3a21] uppercase tracking-wide mb-4">
              Politicas
            </h3>
            <ul className="space-y-2.5">
              {policyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#6b5b4f] hover:text-[#5c3a21] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-[#6b5b4f]">Siga-nos</span>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#5c3a21] flex items-center justify-center text-white hover:bg-[#4a3528] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#5c3a21] flex items-center justify-center text-white hover:bg-[#4a3528] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#5c3a21] flex items-center justify-center text-white hover:bg-[#4a3528] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#5c3a21] flex items-center justify-center text-white hover:bg-[#4a3528] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-6">
              <span className="font-serif text-3xl lg:text-4xl text-[#5c3a21] italic font-bold">
                Feliz hoje
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#5c3a21] text-[#d4c4b0] text-[10px] lg:text-xs text-center py-3 px-4">
        <p>
          {'Copyright 2023. Todos os direitos reservados. | Cacau Comercio Eletronico LTDA 32.143.933/0002-05. | Endereco: Avenida Helio Ossamu Daikuara, 1445 Bairro Jardim Vista Alegre Municipio Embu das Artes - SP CEP: 06807-000'}
        </p>
      </div>
    </footer>
  )
}
