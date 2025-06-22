"use client";

import { useState } from "react";
import Link from "next/link";
import type { MenuProps } from "./header";

export function MobileMenu({ pages, collections }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="relative z-50">
      {/* Simple hamburger button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center h-10 w-10 bg-[#da2f6a] rounded-[8px] focus:outline-none hover:animate-shake"
        aria-label="Toggle mobile menu"
        style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.2)" }}
      >
        <span
          className={`bg-white h-[3px] w-6 rounded-full transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <span
          className={`bg-white h-[2px] w-6 rounded-full transition-opacity duration-300 ease-in-out my-1.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-white h-[3px] w-6 rounded-full transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10"
          onClick={toggleMenu}
          style={{ backdropFilter: "blur(1px)" }}
        />
      )}

      {/* Mobile menu dropdown - Only render when open */}
      {isOpen ? (
        <div
          className="fixed top-[65px] left-0 right-0 bg-[#3c3c3b] shadow-lg transition-transform duration-300 ease-in-out translate-y-0"
        >
          <div className="py-5 px-4">
            <nav className="flex flex-col space-y-4 items-center">
              <Link
                href="/#news"
                className="text-white text-xl font-medium py-2"
                onClick={toggleMenu}
              >
                Community
              </Link>

              <Link
                href="/#discover"
                className="text-white text-xl font-medium py-2"
                onClick={toggleMenu}
              >
                Events
              </Link>

              <Link
                href="/#leaderboard"
                className="text-white text-xl font-medium py-2"
                onClick={toggleMenu}
              >
                Leaderboard
              </Link>

              <Link
                href="#"
                className="text-white text-xl font-medium py-2"
                onClick={toggleMenu}
              >
                Shop
              </Link>

              <Link href="/play" onClick={toggleMenu} className="mt-4">
                <button
                  className="w-[120px] h-[42px] bg-[#da2f6a] text-white border-0 rounded-[8px] text-[1.2em]"
                  style={{ fontFamily: "'Porkys', sans-serif" }}
                >
                  Play
                </button>
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
