import CompanyLogos from "../components/CompanyLogos";
import ComparisonTable from "../components/ComparisonTable";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import TestimonialCards from "../components/TestimonialCards";
import ViralStepsCards from "../components/ViralStepsCards";
const HomePage = () => {
  return (
    <Layout>
      <div className="bg-[#0F0F0F] justify-center flex flex-col">
        <div className="rounded-[3vw] mx-4 sm:mx-8 lg:mx-16 mt-12 mb-20 sm:mb-24 lg:mb-32 overflow-hidden">
          <HeroSection />
        </div>
        <div className="relative z-10 text-center mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mx-auto">
            Utilisé par <span className="text-[#787BFF]">+500</span>{" "}
            professionel et créateur amateur
          </h1>
        </div>
        <div className="border-b-2 border-black mt-8 sm:mt-10">
          <CompanyLogos />
          <div className="text-center mb-16 sm:mb-20 lg:mb-24 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4">
              Ils cartonnent déjà,
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-[#885CF6] to-[#3B82F6] bg-clip-text text-transparent">
                et toi ?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 mx-auto">
              Découvre comment nos utilisateurs génèrent des millions avec l'IA
            </p>
          </div>
          <TestimonialCards />
        </div>
        <div className="relative z-10 text-center mx-auto mt-12 sm:mt-14 lg:mt-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white/90 mx-auto max-w-3xl">
            Comment ça marche
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#757575] mx-auto max-w-3xl mt-6 sm:mt-8 mb-16 sm:mb-20">
            3 étapes simples pour transformer n'importe quel produit en
            publicité virale
          </p>
        </div>
        <ViralStepsCards />
        <div className="relative z-10 text-center mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl py-3 font-bold bg-gradient-to-r from-[#8E51FF] from-0% via-[#51A2FF] via-50% to-[#A684FF] mx-auto mb-6 sm:mb-8 max-w-3xl bg-clip-text text-transparent">
            Pourquoi Ad Forge?
          </h1>
          <div>
            <div className="hidden md:block relative mx-auto w-32 sm:w-36 h-1 sm:h-1.5 transform -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-r rounded-xl from-[#8E51FF] from-0% via-[#51A2FF] via-100% to-[#A684FF] to-100% "></div>
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl bg-transparent font-medium text-[#757575] mx-auto max-w-4xl mt-6 sm:mt-8 mb-10 sm:mb-12">
            La seule plateforme qui combine tout ce dont vous avez besoin
          </p>
        </div>
        <ComparisonTable />
      </div>
    </Layout>
  );
};

export default HomePage;
