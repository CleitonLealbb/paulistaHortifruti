import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/src/constants/site";

const categories = [
  {
    title: "Frutas Selecionadas",
    description: "Variedade, sabor e qualidade para todos os dias.",
    badge: "15+ opções",
    image: "/Frutas.png",
  },
  {
    title: "Legumes Frescos",
    description: "Produtos escolhidos com cuidado para sua família.",
    badge: "20+ opções",
    image: "/legumes.png",
  },
  {
    title: "Verduras e Folhas",
    description: "Mais frescor, saúde e leveza para suas refeições.",
    badge: "10+ opções",
    image: "/verduras2.png",
  },
  {
    title: "Empório e Grãos",
    description: "Itens selecionados para completar sua alimentação.",
    badge: "Novidades",
    image: "/emporios.png",
  },
];

export default function Categories() {
  return (
    <section
      id="categorias"
      className="bg-[#f1efe8] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
              Nossos produtos
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
              Nossas categorias
            </h2>

            <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
              Encontre frutas, verduras, legumes e outros produtos
              selecionados para oferecer mais variedade e qualidade em
              Nova Xavantina.
            </p>
          </div>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-950 transition-colors hover:text-orange-700"
          >
            Consultar disponibilidade
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
             className="group relative h-[440px] overflow-hidden rounded-xl bg-green-950 shadow-sm "
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-flex rounded-md bg-orange-700 px-3 py-1 text-xs font-semibold text-white">
                  {category.badge}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/80">
                  {category.description}
                </p>

                <div className=" cursor-pointer mt-4 flex items-center gap-2 text-sm font-semibold text-white opacity-100 transition-all duration-300 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  Ver produtos
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}