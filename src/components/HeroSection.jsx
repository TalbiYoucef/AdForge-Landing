import React from "react";
import bgImg from "../assets/bgImg.png";
import VideoPlaceholder from "./VideoPlaceholder";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center bg-black bg-no-repeat relative overflow-hidden flex flex-col items-center justify-center px-4 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="relative z-10 text-center mx-auto mb-12 sm:mb-16 lg:mb-18">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-normal font-bold text-white mb-8 sm:mb-10 leading-tight">
          De ton produit à une
          <br />
          <span className="bg-gradient-to-r from-[#885CF6] to-[#3B82F6] bg-clip-text text-transparent">
            pub virale en 1 clic
          </span>
          <br />
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 sm:mb-12 lg:mb-14 max-w-5xl gap-0 mx-auto">
          Transforme ton produit en publicité TikTok virale avec l'IA.
          <br />
          Génère des vidéos + audiences + ROI en quelques clics.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-10 justify-center">
          <button className="bg-[#23DC00] text-lg sm:text-xl text-white px-8 sm:px-10 lg:px-12 font-bold h-12 sm:h-14 rounded-xl font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 cursor-pointer">
            Essayer gratuitement
          </button>
          <button className="border border-white/20 text-lg sm:text-xl text-white px-8 sm:px-10 lg:px-12 h-12 sm:h-14 rounded-xl font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 cursor-pointer">
            Voir la démo
          </button>
        </div>
      </div>

      <VideoPlaceholder/>
       
    </section>
  );
};

export default HeroSection;
