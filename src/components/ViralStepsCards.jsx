import React from "react";
import arrow_up from "../assets/arrow_up.svg";
import brain from "../assets/brain.svg";
import paste from "../assets/paste.svg";

export default function ViralStepsCards() {
  const steps = [
    {
      number: 1,
      icon: paste,
      title: "Colle ton lien produit",
      description:
        "Ajoute simplement le lien de ton produit (Shopify, Amazon, etc.) et notre IA l'analyse automatiquement.",
    },
    {
      number: 2,
      icon: brain,
      title: "L'IA génère tes pubs",
      description:
        "En 2 minutes, obtiens des publicités TikTok optimisées avec scripts, visuels et audiences ciblées.",
    },
    {
      number: 3,
      icon: arrow_up,
      title: "Lance et scale",
      description:
        "Publie directement sur tes plateformes et laisse l'IA optimiser automatiquement tes campagnes.",
    },
  ];

  return (
    <div className="h-full text-white mb-12 sm:mb-16 md:mb-20 lg:mb-24  px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row gap-36 2xl:flex-row 2xl:gap-48 2xl:mr-20 2xl:-ml-12 lg:flex-col lg:px-40 lg:gap-0 md:flex-col md:gap-0 sm:flex-col sm:gap-0 items-center justify-center mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative w-full max-w-md lg:max-w-none 2xl:w-1/3 ">
              <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center w-full lg:w-118 h-auto min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:h-96 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 md:-top-6 md:-left-6">
                  <div className="bg-[#23DC00] text-white font-bold text-xl sm:text-2xl md:text-3xl w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>
                </div>

                <div className="mt-2 sm:mt-3 md:mt-4 mb-3 sm:mb-4 md:mb-6 inline-flex">
                  <img
                    src={step.icon}
                    alt=""
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 rounded-xl sm:rounded-2xl"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {step.title}
                </h3>

                <p className="text-[#757575] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xl mx-auto tracking-wide px-2">
                  {step.description}
                </p>
              </div>

              {/* horizontal line, visible on lg and above screens */}
              {index < steps.length - 1 && (
                <div className="hidden  2xl:block 2xl:left-118 2xl:w-8 lg:hidden absolute top-1/2 -right-36 w-25 h-1.5 transform -translate-y-1/2">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8E51FF] from-0% via-[#51A2FF] to-[#A684FF]"></div>
                  <div className="absolute inset-0 bg-black/62"></div>
                </div>
              )}

              {/* vertical line, visible on md and below screens */}
              {index < steps.length - 1 && (
                <div className="2xl:hidden flex justify-center">
                  <div className="relative w-1.5 h-20 sm:h-32 md:h-32 ">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#8E51FF] via-[#51A2FF] to-[#A684FF]"></div>
                    <div className="absolute inset-0 bg-black/62"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row justify-center items-center  mt-8 sm:mt-12 md:mt-16">
          <button className="bg-[#23DC00] hover:bg-[#1FC700] text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-6 sm:px-10 md:px-12 lg:px-16 py-2.5 sm:py-3 md:py-4 tracking-wide rounded-full transition-all hover:scale-105 active:scale-95">
            <span className="text-sm sm:text-base md:text-lg">En Savoir Plus</span>
          </button>
          <button className="bg-[#23DC00] hover:bg-[#1FC700] p-2.5 sm:p-3 md:p-4 rounded-full transition-all hover:scale-105 active:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
