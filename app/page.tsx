// app/page.tsx
import Home from "@/components/HomeCarousel";
import About from "@/components/modules/homeModules/About";
import HomeHero from "@/components/modules/homeModules/HomeHero";
import Nature from "@/components/modules/homeModules/Nature";
import Partners from "@/components/modules/homeModules/Partners";
import WineSection from "@/components/modules/homeModules/WineSection";
import React from "react";

const page = () => {
  return (
    <div className="body">
      <HomeHero />
      <About />
      <WineSection />
      <Home />
      <Nature />
      <Partners />
    </div>
  );
};

export default page;
