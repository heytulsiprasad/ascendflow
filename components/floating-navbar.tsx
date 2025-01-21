"use client";

import { Button } from "@/components/ui/button";
import { MEETING_LINK } from "@/lib/constants";
import { Bot } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FloatingNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsVisible(currentScrollY < lastScrollY);
      } else {
        setIsVisible(true); // Ensure navbar is visible at the top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-4 my-4 glass-effect border border-white/10 rounded-2xl dark:bg-gray-900 dark:border-gray-700">
        <div className="mx-auto">
          <div className="flex items-center justify-between h-16 px-4">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                AscendFlow
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {["Services", "About", "Testimonials", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm text-gray-300 hover:text-white transition-colors nav-link"
                >
                  {item}
                  <span className="nav-underline" />
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              {/* <Button
                variant="ghost"
                className="hidden md:inline-flex text-white hover:bg-white/10"
              >
                Sign In
              </Button> */}
              <Button
                onClick={() => window.open(MEETING_LINK)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                Book a Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
