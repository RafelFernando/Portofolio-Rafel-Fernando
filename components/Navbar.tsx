"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Project", href: "/projects" },
  { name: "Internship", href: "/internship" },
  { name: "Writing", href: "/writing" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      // Mulai animasi keluar
      setIsMounted(false);
      setTimeout(() => setIsOpen(false), 300);
    } else {
      setIsOpen(true);
      // Delay kecil untuk memastikan DOM sudah dirender
      setTimeout(() => setIsMounted(true), 10);
    }
  };

  const closeMenu = () => {
    setIsMounted(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  // Prevent scroll ketika menu terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${isScrolled ? "border-b border-transparent" : "border-b border-black/20"
        }`}
    >
      <div className="flex justify-between h-full px-6 mx-auto">
        {/* Logo placeholder di kiri (opsional) */}
        <div className="">
          <img src="/logo2.png" alt="" className="w-[90px] h-[90px] object-contain" />
        </div>

        {/* Desktop Menu - TETAP DI TENGAH */}
        <ul
          className={`hidden md:flex items-center justify-center gap-9 text-xl transition-all duration-300
            ${isScrolled
              ? "border border-blue-600 rounded-[50px] px-7 py-2 bg-white my-2"
              : "border border-transparent"
            }`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="transition-all duration-200 hover:scale-110 hover:text-blue-700"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div></div>

        {/* Hamburger Button - TETAP DI KANAN */}
        <button
          className="z-50 md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={28} className="transition-transform duration-300" />
          ) : (
            <Menu size={28} className="transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden fixed inset-0 top-20 z-40 bg-white transition-all duration-300 ease-in-out ${isMounted ? "opacity-100" : "opacity-0"
            }`}
        >
          <div
            className={`flex flex-col items-center justify-center h-full gap-8 py-10 text-xl transition-all duration-300 ${isMounted ? "translate-y-0" : "-translate-y-4"
              }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="py-2 transition-all duration-200 hover:text-gray-700 hover:scale-110"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}