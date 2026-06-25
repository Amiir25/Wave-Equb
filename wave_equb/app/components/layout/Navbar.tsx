"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/images/wave.png" alt="MicroGrow" width={120} height={32} />
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:block">
          <Link
            href="#download"
            className="bg-[#1A5A45] hover:bg-[#1A5A45] text-white text-sm font-semibold px-5 py-3 rounded-xl
            transition-colors duration-200"
          >
            Download App
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile Menu Drawer ── */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-white z-40 px-6 pt-8 pb-10 flex flex-col gap-6 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-lg font-medium text-stone-700 hover:text-amber-700 border-b border-stone-100 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}