import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/Hero";
import Features from "../components/sections/Features";
import Categories from "../components/sections/Categories";
import About from "../components/sections/About";
import  Contact  from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features/>    
        <Categories />
        <About/>
        <Contact />
        <Footer/>
      </main>
    </>
  );
}