import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Tools from "@/components/Tools";
import Service from "@/components/Service";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="md:pt-[20px]">
        <Hero />
        <Experience />
        <TechStack />
        <Tools />
        <Service />
        <Footer />
      </main>
    </>
  );
}

