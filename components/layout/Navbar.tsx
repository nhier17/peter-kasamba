"use client";

import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { navLinks } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
     <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Heart
              className={`h-8 w-8 ${isScrolled ? 'text-primary' : 'text-white'}`}
              fill="currentColor"
            />
            <span
              className={`text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              PeterKasamba
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/80 text-white">
              Donate
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X
                className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`}
              />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-6 bg-white rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-accent transition-colors px-4 py-2"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4">
                <Button className="w-full bg-primary hover:bg-primary/80 text-white">
                  Donate
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}