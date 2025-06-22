"use client";

import { useState } from "react";
import Image from "next/image";

export default function PlayPage() {
  const [showEmbed, setShowEmbed] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const gameUrl = "https://sq_250202_01-z1ry306z1huswi-latest.needle.run/";
  
  const embedGame = () => {
    setLoading(true);
    setShowEmbed(true);
    setTimeout(() => setLoading(false), 500);
  };
  
  const openInNewTab = () => {
    window.open(gameUrl, "_blank");
  };
  
  return (
    <div 
      className="bg-[#7a29ff] min-h-screen pb-24 relative" 
      style={{
        backgroundImage: "url('/images/news-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 
            className="section-header text-center text-5xl md:text-5xl font-bold text-white mb-6"
            style={{
              fontFamily: "Porkys, sans-serif",
              textShadow: "-4px -4px 0px rgba(0, 0, 0, 0.2), 4px -4px #f5bd2f, -4px 4px 0px #f5bd2f, 10px 10px 0px #f5bd2f, -4px 0px 0px #f5bd2f, 4px 0px 0px #f5d547, 0px -4px 0px #f5d547, 0px 4px 0px #f5d547"
            }}
          >
            Play
          </h2>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        
          <div className="max-w-5xl mx-auto bg-[#121212] rounded-xl overflow-hidden shadow-lg">
            {/* Game header */}
            <div className="bg-[#f5bd2f] p-5 flex items-center justify-between">
              <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Porkys', sans-serif" }}>
                SUMO QUBES
              </h1>
              <span className="bg-white text-[#f5bd2f] px-3 py-1 rounded-full font-bold">
                PLAY NOW
              </span>
            </div>
            
            {/* Game area */}
            <div className="p-8 flex flex-col items-center">
              {!showEmbed ? (
                <>
                  {/* Game preview image */}
                  <div className="relative w-full max-w-3xl aspect-video mb-8 rounded-lg overflow-hidden">
                    <Image 
                      src="/images/game-heroes.png" 
                      alt="SumoQubes Game" 
                      fill 
                      style={{objectFit: 'cover'}}
                      priority
                    />
                  </div>
                  
                  {/* Game description */}
                  <div className="text-white text-center mb-8">
                    <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Porkys', sans-serif" }}>
                      SMASH! BASH &amp; CRASH!!
                    </h2>
                    <p className="text-lg">
                      Jump into the battle arena with your favorite Qubes character!
                      Compete against players from around the world in this fast-paced 
                      multiplayer game.
                    </p>
                  </div>
                  
                  {/* Play buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={embedGame}
                      disabled={loading}
                      className="w-[200px] h-[60px] bg-[#7a29ff] text-white text-xl border-0 rounded-[8px] hover:animate-shake disabled:opacity-70"
                      style={{ fontFamily: "'Porkys', sans-serif" }}
                    >
                      {loading ? "LOADING..." : "PLAY HERE"}
                    </button>
                    <button 
                      onClick={openInNewTab}
                      className="w-[200px] h-[60px] bg-[#3a3a3a] text-white text-xl border-0 rounded-[8px] hover:animate-shake"
                      style={{ fontFamily: "'Porkys', sans-serif" }}
                    >
                      PLAY FULLSCREEN
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Embedded game */}
                  <div className="w-full aspect-[16/9] mb-4">
                    <iframe 
                      src={gameUrl}
                      className="w-full h-full border-0 rounded-lg"
                      title="SumoQubes Game"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex gap-4 mt-4">
                    <button 
                      onClick={() => setShowEmbed(false)}
                      className="px-6 py-2 bg-white text-[#7a29ff] rounded-lg hover:bg-gray-200"
                    >
                      Back to Info
                    </button>
                    <button 
                      onClick={openInNewTab}
                      className="px-6 py-2 bg-[#3a3a3a] text-white rounded-lg hover:bg-[#2a2a2a]"
                    >
                      Open Fullscreen
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    
  );
}
