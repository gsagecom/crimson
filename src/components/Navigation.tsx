"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/industries", label: "Industries" },
  { href: "/services", label: "Services" },
  { href: "/governance", label: "Governance" },
  { href: "/about", label: "About Us" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 py-2">
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Crimson Industries Corporation"
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-800">Crimson Industries</h1>
              <p className="text-sm text-slate-600">Corporation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-200 font-medium px-4 py-2 rounded-full ${
                  pathname === item.href
                    ? "text-crimson-600 bg-crimson-50"
                    : "text-slate-700 hover:text-crimson-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
              <button className="bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg font-medium">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all duration-200 font-medium px-4 py-3 rounded-lg ${
                    pathname === item.href
                      ? "text-crimson-600 bg-crimson-50"
                      : "text-slate-700 hover:text-crimson-600 hover:bg-slate-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg font-medium mt-2">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
