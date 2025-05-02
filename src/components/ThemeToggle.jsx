"use client"

import { useState, useRef, useEffect } from "react"
import { useTheme } from "../contexts/ThemeContext"
import { Moon, Sun } from "lucide-react"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={16} />
      case "dark":
        return <Moon size={16} />
    //   case "pastel":
    //     return <Palette size={16} />
      default:
        return <Sun size={16} />
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100"
        aria-label="Toggle theme"
      >
        {getThemeIcon()}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => {
                setTheme("light")
                setIsOpen(false)
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <Sun size={16} className="mr-2" />
              Light
            </button>
            <button
              onClick={() => {
                setTheme("dark")
                setIsOpen(false)
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <Moon size={16} className="mr-2" />
              Dark
            </button>
            <button
              onClick={() => {
                setTheme("pastel")
                setIsOpen(false)
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <Palette size={16} className="mr-2" />
              Pastel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ThemeToggle
