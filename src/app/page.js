import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full min-h-screen mx-auto text-white md:w-3/4">
     <Navbar />
     <HeroSection />
     <About />
     <ContactMe />
    </main>
  );
}
 