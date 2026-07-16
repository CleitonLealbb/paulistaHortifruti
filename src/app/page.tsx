import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="produtos"
          className="flex min-h-screen items-center justify-center bg-white"
        >
          <h2 className="text-3xl font-bold text-green-950">
            Produtos
          </h2>
        </section>
      </main>
    </>
  );
}