"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/sermons" },
  { name: "Events", href: "/events" },
  { name: "Media", href: "/podcast" },
  { name: "Give", href: "/donate" },
  { name: "Contact", href: "/contact" },
  { name: "Fellowships", href: "/fellowship" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full z-50 sticky top-0 bg-[#4A1626] shadow-lg">
      {/* Utility bar */}
      <div className="hidden md:block border-b border-white/10 bg-[#2D2B44]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-10 items-center justify-between text-[11px] uppercase tracking-[0.15em] text-white/50 whitespace-nowrap">
            <div className="flex items-center space-x-8">
              <span>Kampala, Uganda</span>
              <span className="hidden lg:inline">+256 7XX XXX XXX</span>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/scripture-finder" className="hover:text-white/80 transition-colors">Bible Guides</Link>
              <Link href="/donate" className="hover:text-white/80 transition-colors">Give</Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo & Links Group */}
          <div className="flex items-center">
            {/* Logo - Far Left */}
            <Link href="/" className="flex items-center mr-12 group">
              <svg 
                width="36" 
                height="36" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:opacity-80 transition-opacity"
              >
                <path d="M12 3a4 4 0 0 1 4 4M12 3a4 4 0 0 0-4 4" />
                <path d="M4 18c1-1 3-2 5-2s3 1 4 2" />
                <path d="M20 18c-1-1-3-2-5-2s-3 1-4 2" />
                <path d="M12 12v2" opacity="0.3" />
              </svg>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.2em] transition-all hover:text-white/70 font-headline text-white whitespace-nowrap",
                    pathname === link.href ? "opacity-100" : "opacity-80"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Group: Search Icon */}
          <div className="flex items-center">
            <button className="p-2 text-white hover:text-white/70 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden ml-4 p-2 text-white"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-[#4A1626] border-t border-white/5 px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "block text-xl font-medium uppercase tracking-widest text-white font-headline",
                pathname === link.href ? "opacity-100" : "opacity-60"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
