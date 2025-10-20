import React from "react";
import playButton from '../assets/play_button.svg';

export default function VideoPlaceholder() {
  return (
    <div className="relative w-full max-w-4xl aspect-video mx-auto px-2 xs:px-0">
      {/* Outer metallic frame with gradient */}
      <div 
        className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-2xl p-1 xs:p-1.5 sm:p-2"
        style={{
          background: 'linear-gradient(-190deg, #333333 0%, #3D3D3D 5%, #575757 14%, #828282 24%, #BDBDBD 37%, #FFFFFF 50%, #C9C9C9 57%, #8C8C8C 66%, #5A5A5A 74%, #333333 82%, #171717 89%, #060606 95%, #000000 100%)'
        }}
      >
        {/* Inner white border */}
        <div className="w-full h-full rounded-md xs:rounded-lg sm:rounded-xl border xs:border-2 border-white/90">
          {/* Main video screen with reflections */}
          <div className="relative w-full h-full bg-[#1F1F1F] rounded-lg overflow-hidden">
            {/* Diagonal reflections */}
            <div 
              className="absolute inset-0 opacity-20 z-20"
              style={{
                background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 20%, transparent 40%, rgba(255,255,255,0.1) 60%, transparent 80%)'
              }}
            ></div>
            
            {/* YouTube iframe - commented out
            <iframe
              className="absolute inset-0 w-full h-full z-10"
              src="https://www.youtube.com/embed/7Dt47KbSKjA"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            
            {/* Play button overlay (centered) */}
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <img
                src={playButton}
                alt="Play button"
                className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20"
              />
            </div>
            
            {/* Bottom-left text */}
            <div className="absolute bottom-2 left-2 xs:bottom-3 xs:left-3 sm:bottom-4 sm:left-4 z-30">
              <div className="text-white font-bold text-xs xs:text-sm sm:text-base md:text-lg mb-0.5 xs:mb-1">
                Démonstration complète
              </div>
              <div className="text-gray-300 text-[10px] xs:text-xs sm:text-sm">
                De produit à pub virale en 2 minutes
              </div>
            </div>
            
            {/* Bottom-right timestamp */}
            <div className="absolute bottom-2 right-2 xs:bottom-3 xs:right-3 sm:bottom-4 sm:right-4 z-30">
              <div className="text-gray-300 text-xs xs:text-sm font-medium">
                2:15
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}