import { Leaf, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    title: "Frescor Garantido",
    description:
      "Produtos selecionados e transportados com cuidado de São Paulo até Nova Xavantina.",
    icon: ShieldCheck,
    iconClass: "bg-emerald-100 text-emerald-900",
  },
  {
    title: "Seleção de Qualidade",
    description:
      "Frutas, verduras e legumes escolhidos para oferecer variedade, sabor e qualidade para sua família.",
    icon: Leaf,
    iconClass: "bg-lime-200 text-green-800",
  },
  {
    title: "Direto para Nova Xavantina",
    description:
      "Produtos vindos de São Paulo para trazer mais variedade e opções frescas para nossa cidade.",
    icon: Truck,
    iconClass: "bg-orange-100 text-orange-700",
  },
];

export default function Features() {
  return (
    <section className="bg-[#f8f6ef] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div
                  className={`flex size-14 items-center justify-center rounded-full ${feature.iconClass}`}
                >
                  <Icon className="size-6" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-green-950">
                  {feature.title}
                </h2>

                <p className="mt-3 text-base leading-7 text-stone-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}