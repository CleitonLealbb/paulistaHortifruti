import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/Hero";
import Features from "../components/sections/Features";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features/>    
       
      </main>
    </>
  );
}