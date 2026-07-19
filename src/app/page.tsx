import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/testimonial";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";
import Calculator from "@/components/sections/Calculator";

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonial />
      <Services />
      <Pricing/>
      <About />
      <Calculator/>
      <Contact />
    </main>
  );
}