import { MapPin, MessageCircle, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

import { navigation } from "@/src/constants/navigation";
import { siteConfig } from "@/src/constants/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-[#ebe9e3]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-green-950">
              {siteConfig.name}
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-stone-600">
              Produtos selecionados em São Paulo e trazidos com cuidado para
              Nova Xavantina.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-950">
              Navegação
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-stone-600 transition-colors hover:text-orange-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-green-950">
              Contato
            </h3>

            <div className="mt-4 space-y-4">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="flex items-start gap-3 text-sm text-stone-600 transition-colors hover:text-orange-700"
              >
                <Phone className="mt-0.5 size-4 shrink-0" />
                {siteConfig.phone}
              </a>

              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-stone-600 transition-colors hover:text-orange-700"
              >
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  {siteConfig.address}
                  <br />
                  {siteConfig.city}
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-green-950">
              Redes sociais
            </h3>

            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex size-10 items-center justify-center rounded-full bg-green-950 text-white transition-all hover:-translate-y-1 hover:bg-green-900"
              >
                <MessageCircle className="size-5" />
              </a>

              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Instagram da Paulista Hortifruti"
                className="flex size-10 items-center justify-center rounded-full bg-orange-700 text-white transition-all hover:-translate-y-1 hover:bg-orange-800"
              >
                <FaInstagram className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>

          <p>
            Desenvolvido por{" "}
            <a
              href="https://meuportifolio-orcin.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-green-850 transition-colors hover:text-orange-700"
            >
              Cleiton Leal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}