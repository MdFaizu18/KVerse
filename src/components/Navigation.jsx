"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { Home, Film, Music, Heart, ListChecks, BookOpen, HelpCircle, User, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "K-Drama", href: "/k-drama", icon: Film },
  { name: "K-Pop", href: "/k-pop", icon: Music },
//   { name: "BL Series", href: "/bl-series", icon: Heart },
//   { name: "Watchlist", href: "/watchlist", icon: ListChecks },
//   { name: "Journal", href: "/journal", icon: BookOpen },
//   { name: "Quiz", href: "/quiz", icon: HelpCircle },
//   { name: "Profile", href: "/profile", icon: User },
]

const Navigation = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-pink-200">
      <div className="container mx-auto px-2 py-4 sm:px-16 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
              K
            </div>
            <span className="font-bold text-xl gradient-text">KVerse</span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* <ThemeToggle /> */}
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-gray-100">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex flex-col items-center px-3 py-1.5 text-xs rounded-full transition-colors
                    ${isActive ? "bg-pink-100 text-pink-600" : "text-gray-600 hover:bg-pink-50 hover:text-pink-500"}
                  `}
                >
                  <Icon size={16} className="mb-0.5" />
                  {item.name}
                </Link>
              )
            })}
            
          </nav>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 py-2 px-4">
          <nav className="grid grid-cols-4 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex flex-col items-center p-2 text-xs rounded-lg transition-colors
                    ${isActive ? "bg-pink-100 text-pink-600" : "text-gray-600 hover:bg-pink-50 hover:text-pink-500"}
                  `}
                >
                  <Icon size={20} className="mb-1" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navigation
