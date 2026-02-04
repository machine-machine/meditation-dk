"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/lib/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-warm-50/90 dark:bg-sage-950/90 backdrop-blur-md border-b border-sage-100 dark:border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-sage-800 dark:text-warm-100 tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            meditation<span className="text-teal-600">.dk</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.slice(1, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-sage-600 dark:text-warm-300 hover:text-sage-900 dark:hover:text-warm-100 transition-colors rounded-md hover:bg-sage-50 dark:hover:bg-sage-800"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Dropdowns for sections */}
            {navigation.slice(5).map((item) => (
              <div key={item.href} className="relative nav-item">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm text-sage-600 dark:text-warm-300 hover:text-sage-900 dark:hover:text-warm-100 transition-colors rounded-md hover:bg-sage-50 dark:hover:bg-sage-800 flex items-center gap-1"
                >
                  {item.label}
                  {"children" in item && (
                    <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {"children" in item && item.children && (
                  <div className="nav-dropdown">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-sage-800 dark:text-warm-200 hover:bg-sage-100 dark:hover:bg-sage-700 hover:text-sage-950 dark:hover:text-warm-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-sage-600 dark:text-warm-300 hover:text-sage-900"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-warm-50 dark:bg-sage-950 border-t border-sage-100 dark:border-sage-800 max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sage-700 dark:text-warm-200 hover:bg-sage-50 dark:hover:bg-sage-800 rounded-md font-medium"
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-1.5 text-sm text-sage-500 dark:text-warm-400 hover:text-sage-800 dark:hover:text-warm-100 hover:bg-sage-50 dark:hover:bg-sage-800 rounded-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
