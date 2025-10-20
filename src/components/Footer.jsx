// src/components/Footer.jsx
import React from "react";
import adForgeLogo from "../assets/ad_forge.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="w-full h-full mx-auto sm:px-2 sm:py-6 lg:px-6 xl:px-12 2xl:px-24 md:py-16">
        {/* Main content area */}
        <div className="px-12 sm:px-2 flex flex-row gap-24 sm:gap-4 2xl:gap-32 mb-8">
          {/* Brand section */}
          <div>
            <div className="md:col-span-1">
              <p className="text-gray-300 text-xl max-w-lg md:text-lg tracking-wide sm:text-base sm:max-w-lg mb-12">
                Trouvez rapidement des solutions et des conseils utiles pour
                utiliser adforge.
              </p>
              <div className="flex items-center">
                <img src={adForgeLogo} alt="AD FORGE" className="h-24 w-auto" />
              </div>
            </div>
          </div>

          <div className="flex flex-row text-3xl gap-32 sm:gap-4 2xl:gap-32 mb-8">
            {/* À propos */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-2xl sm:text-xl">À propos</h3>
              <ul className="space-y-4 text-white">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold mb-4 text-2xl sm:text-xl">Resources</h3>
              <ul className="space-y-3 text-white">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Centre d'aide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Communauté
                  </a>
                </li>
              </ul>
            </div>

            {/* Produits */}
            <div>
              <h3 className="text-white font-bold mb-4 text-2xl sm:text-xl">Produits</h3>
              <ul className="space-y-3 text-white">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Pour individus
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Pour buisnesses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Solutions de payement
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-bold mb-4 text-2xl sm:text-xl">Support</h3>
              <ul className="space-y-3 text-white">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Reporter un problème
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-[#DECDCD] transition-colors text-lg sm:text-base"
                  >
                    Sécurité
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        {/* Bottom section */}
        <div className="border-t border-[#FFFFFF] flex flex-col px-12 py-12 md:flex-row justify-between items-center">
          <div className="text-gray-500 text-xl mb-4 md:mb-0">
            Copyright 2025
          </div>
          <div className="flex space-x-6">
            {/* Social media icons */}
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
