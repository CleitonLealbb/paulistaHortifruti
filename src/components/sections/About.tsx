import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  {
    title: "Seleção cuidadosa",
    description: "Produtos escolhidos com atenção à qualidade e ao frescor.",
  },
  {
    title: "Mais variedade",
    description: "Opções vindas de São Paulo para Nova Xavantina.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="overflow-hidden bg-[#f8f6ef] py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="absolute -left-10 -top-10 size-40 rounded-full bg-lime-200/50 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 size-40 rounded-full bg-orange-200/50 blur-3xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/produtor.jpg"
              alt="Produtos frescos da Paulista Hortifruti"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-4 rounded-2xl bg-green-950 px-6 py-5 text-white shadow-xl sm:left-8">
            <p className="text-3xl font-bold">SP → MT</p>
            <p className="mt-1 text-sm text-green-100">
              Produtos para Nova Xavantina
            </p>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
            Sobre nós
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
            Mais variedade e qualidade para Nova Xavantina
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-700">
            A Paulista Hortifruti nasceu com o propósito de trazer para
            cidade e região! frutas, verduras e legumes selecionados de São Paulo, sempre
            com cuidado no transporte e atenção à qualidade.
          </p>

          <p className="mt-4 text-base leading-7 text-stone-600">
            Nosso objetivo é oferecer produtos frescos, boa variedade e um
            atendimento próximo, facilitando o acesso das famílias de Nova
            Xavantina a alimentos de qualidade.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-orange-700" />

                <div>
                  <h3 className="font-semibold text-green-950">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            className="mt-9 inline-flex rounded-full bg-green-950 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-900"
          >
            Conheça nossa loja
          </a>
        </div>
      </div>
    </section>
  );
}