import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Features from "./components/sections/Features";
import AboutTheApp from "./components/sections/AboutTheApp";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar/>
        <Hero/>
        <HowItWorks/>
        <Features/>
        <AboutTheApp/>
      </main>
    </div>
  );
}
