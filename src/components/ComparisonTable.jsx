import React from "react";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const BrandsCard = ({ name, subtitle, recommended, isAdForge }) => {
  return (
    <div className="relative">
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <span
           className="px-2 py-1 rounded-full text-xs font-bold bg-[#10B981] text-black whitespace-nowrap"
          >
            RECOMMANDÉ
          </span>
        </div>
      )}
      <div
        className="rounded-4xl px-0 xs:px-3 sm:px-1 md:px-2 py-4 xs:py-10 sm:py-4 md:py-14 lg:py-12 text-center border-2"
        style={
          isAdForge
            ? {
                background:
                  "linear-gradient(145deg, rgba(17, 19, 23, 0.3) 40%, rgba(59, 130, 246, 0.3) 90%)",
                borderColor: "rgba(16, 185, 129, 0.3)",
              }
            : {
                backgroundColor: "#14192180",
                borderColor: "#302C2C",
              }
        }
      >
        <h3
          className="text-xs xs:text-lg sm:text-xl lg:text-3xl font-bold mb-1"
          style={{ color: isAdForge ? "#10B981" : "#fff" }}
        >
          {name}
        </h3>
        <p className="text-xs xs:text-sm sm:text-xs lg:text-xl text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

const FeatureIcon = ({ hasFeature, isAdForge }) => {
  if (!hasFeature) {
    return (
      <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full flex items-center justify-center border-2 border-[#302C2C] bg-[#14192180] text-[#435064]">
        <XIcon />
      </div>
    );
  }

  if (isAdForge) {
    return (
      <div
        className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full flex items-center justify-center border-2"
        style={{
          borderColor: "#10B981",
          backgroundColor: "transparent",
          color: "#10B981",
        }}
      >
        <CheckIcon />
      </div>
    );
  }

  return (
    <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full flex items-center justify-center border-2 border-[#302C2C] bg-[#14192180] text-[#435064]">
      <CheckIcon />
    </div>
  );
};

const FeatureRow = ({ featureName, values }) => {
  return (
    <div className="grid grid-cols-5 gap-2 xs:gap-3 sm:gap-4 md:gap-6 items-center bg-[#0A0A0A] bg-opacity-100 rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 border border-[#262626]">
      <div className="text-white font-semibold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl">
        {featureName}
      </div>
      {values.map((hasFeature, idx) => (
        <div key={idx} className="flex justify-center">
          <FeatureIcon hasFeature={hasFeature} isAdForge={idx === 0} />
        </div>
      ))}
    </div>
  );
};

const ComparisonTable = () => {
  const products = [
    {
      name: "Ad Forge",
      subtitle: "Solution complète",
      recommended: true,
      isAdForge: true,
    },
    {
      name: "Canva",
      subtitle: "Design basique",
      recommended: false,
      isAdForge: false,
    },
    {
      name: "Synthesia",
      subtitle: "Vidéos IA",
      recommended: false,
      isAdForge: false,
    },
    {
      name: "Creatify",
      subtitle: "Création vidéo",
      recommended: false,
      isAdForge: false,
    },
  ];

  const features = [
    {
      name: "Génération de vidéos",
      values: [true, false, true, true],
    },
    {
      name: "Audiences ciblées IA",
      values: [true, false, false, false],
    },
    {
      name: "Optimisation ROI",
      values: [true, false, false, false],
    },
    {
      name: "Intégration TikTok",
      values: [true, false, false, true],
    },
    {
      name: "Analytics avancées",
      values: [true, false, false, false],
    },
  ];

  return (
    <div className="h-full mb-6 p-2 xs:p-6 sm:p-8 md:p-2 lg:p-16" style={{ backgroundColor: "#0F0F0F" }}>
      <div className="mx-auto">
        {/* Header Row */}
        <div className="h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 grid px-4 xs:px-6 sm:px-8 md:p-0 gap-2 xs:gap-3 sm:gap-2 md:gap-4 lg:gap-6 mb-3 xs:mb-4 sm:mb-8 md:mb-16 lg:mb-24 grid-cols-5">
          <div/>
          {products.map((product, idx) => (
            <BrandsCard
              key={idx}
              name={product.name}
              subtitle={product.subtitle}
              recommended={product.recommended}
              isAdForge={product.isAdForge}
            />
          ))}
        </div>

        {/* Feature Rows */}
        <div className="space-y-1 xs:space-y-2">
          {features.map((feature, idx) => (
            <FeatureRow
              key={idx}
              featureName={feature.name}
              values={feature.values}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
