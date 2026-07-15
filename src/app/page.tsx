import Navbar from "@/src/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="inicio"
          className="flex min-h-screen items-center justify-center bg-stone-50 pt-20"
        >
          <h1 className="text-4xl font-bold text-emerald-950">
            Paulista Hortifruti
          </h1>
        </section>

        <section
          id="produtos"
          className="flex min-h-screen items-center justify-center bg-white"
        >
          <h2 className="text-3xl font-bold">Produtos</h2>
        </section>

        <section
          id="sobre"
          className="flex min-h-screen items-center justify-center bg-stone-50"
        >
          <h2 className="text-3xl font-bold">Sobre nós</h2>
        </section>

        <section
          id="contato"
          className="flex min-h-screen items-center justify-center bg-white"
        >
          <h2 className="text-3xl font-bold">Contato</h2>
        </section>
      </main>
    </>
  );
}