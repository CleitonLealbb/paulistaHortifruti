"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, MessageCircle } from "lucide-react";

import { buttonVariants } from "@/src/components/ui/button";
import { siteConfig } from "@/src/constants/site";
import { cn } from "@/src/lib/utils";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[520px] overflow-hidden bg-[#f8f6ef] pt-20 md:min-h-[720px]"
    >
      {/* Imagem de fundo */}
      <Image
        src="/front-view-vegetable.jpg"
        alt="Frutas, verduras e legumes frescos"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />


      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f6ef] via-[#f8f6ef]/80 to-[#f8f6ef]/0" />



      <div className="relative z-10 mx-auto flex min-h-[540px] max-w-7xl items-center px-4 py-16 sm:px-6 md:min-h-[640px] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="max-w-xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-lime-200 px-3 py-1.5 text-sm font-semibold text-green-950">
            <Leaf className="size-3.5" />
            Produtos 100% frescos
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-green-950 sm:text-6xl lg:text-7xl">
            Paulista{" "}
            <span className="text-orange-700">Hortifruti</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-stone-700">
            Frutas, verduras e legumes selecionados de São Paulo e trazidos com
            cuidado para Nova Xavantina, oferecendo mais frescor, variedade e
            qualidade para sua família.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#produtos"
              className={cn(
                buttonVariants(),
                "h-12 rounded-md bg-green-950 px-6 text-white hover:bg-green-900"
              )}
            >
              Ver catálogo
              <ArrowRight className="size-4" />
            </a>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-md border-orange-700 bg-transparent px-6 text-orange-700 hover:bg-orange-50 hover:text-orange-800"
              )}
            >
              <MessageCircle className="size-4" />
              Nosso Zap
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}