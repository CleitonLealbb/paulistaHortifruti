"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Menu, MessageCircle } from "lucide-react";

import { Button, buttonVariants } from "@/src/components/ui/button";


import { navigation } from "@/src/constants/navigation";
import { siteConfig } from "@/src/constants/site";
import { useScrolled } from "@/src/hooks/useScrolled";
import { cn } from "@/src/lib/utils";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
        scrolled
          ? "border-black/5 bg-background/90 shadow-sm backdrop-blur-xl"
          : "bg-background/70 backdrop-blur-md"
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          aria-label="Ir para o início"
          className="group flex items-center gap-3"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-emerald-950 text-white shadow-sm transition-transform group-hover:rotate-6 group-hover:scale-105">
            <Leaf className="size-5" aria-hidden="true" />
          </span>

          <div className="flex flex-col">
            <span className="text-base font-bold leading-none text-emerald-950 sm:text-lg">
              Paulista Hortifruti
            </span>

            <span className="mt-1 hidden text-xs text-muted-foreground sm:block">
              {siteConfig.slogan}
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-emerald-950/5 hover:text-emerald-950"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className={buttonVariants({
              className:
                "w-full rounded-full bg-orange-700 text-white hover:bg-orange-800",
            })}
          >
            <MessageCircle className="size-4" />
            Pedir pelo WhatsApp
          </a>
        </div>

        <div className="lg:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Abrir menu"
                  className="rounded-full border-emerald-950/15 bg-background/80"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[310px] border-l-emerald-950/10 px-6"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="flex items-center gap-3 text-emerald-950">
                  <span className="flex size-10 items-center justify-center rounded-full bg-emerald-950 text-white">
                    <Leaf className="size-5" />
                  </span>

                  {siteConfig.name}
                </SheetTitle>

                <SheetDescription>
                  {siteConfig.slogan}
                </SheetDescription>
              </SheetHeader>
              <div className="mt-10 flex flex-col gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-emerald-950/5 hover:text-emerald-950"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 border-t pt-6">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className={buttonVariants({
                    className:
                      "w-full rounded-full bg-orange-700 text-white hover:bg-orange-800",
                  })}
                >
                  <MessageCircle className="size-4" />
                  Pedir pelo WhatsApp
                </a>
              </div>


            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}