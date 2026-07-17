import {
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { buttonVariants } from "@/src/components/ui/button";
import { siteConfig } from "@/src/constants/site";
import { cn } from "@/src/lib/utils";

const contactItems = [
  {
    icon: Phone,
    title: "Telefone",
    description: siteConfig.phone,
  },
  {
    icon: MapPin,
    title: "Endereço",
    description: `${siteConfig.address} - ${siteConfig.city}`,
  },
  {
    icon: Clock3,
    title: "Horário",
    description: "Horários em breve",
  },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-white py-12 sm:py-10"
    >
      <div className="mx-auto max-w-7xl   px-6 sm:px-10 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-green-950 shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Entre em contato
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Venha conhecer a Paulista Hortifruti
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-green-100 sm:text-lg">
                Fale conosco pelo WhatsApp ou visite nossa loja em Nova
                Xavantina. Estamos preparando tudo para receber você e sua
                família.
              </p>

              <div className="mt-9 space-y-6">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                        <Icon className="size-5" />
                      </span>

                      <div>
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-green-100">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants(),
                    "h-12 rounded-full bg-[#25D366] px-7 text-white hover:bg-[#1fbd5a]"
                  )}
                >
                  <MessageCircle className="size-4" />
                  Falar no WhatsApp
                </a>

                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-12 rounded-full border-white/30 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  <MapPin className="size-4" />
                  Como chegar
                </a>
              </div>
            </div>

            <div className="min-h-[360px] bg-stone-200 lg:min-h-full">
              {siteConfig.mapsEmbedUrl ? (
                <iframe
                  src={siteConfig.mapsEmbedUrl}
                  title="Localização da Paulista Hortifruti"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[360px] w-full border-0"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full min-h-[360px] items-center justify-center p-8 text-center">
                  <div>
                    <MapPin className="mx-auto size-10 text-green-950" />

                    <p className="mt-4 font-semibold text-green-950">
                      Mapa da localização
                    </p>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-stone-600">
                      Adicione o link incorporado do Google Maps em
                      <code className="mx-1 rounded bg-white px-1.5 py-0.5">
                        mapsEmbedUrl
                      </code>
                      para exibir o mapa aqui.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}