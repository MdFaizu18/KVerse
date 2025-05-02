"use client"

import { createContext, useState, useEffect, useContext } from "react"

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem("theme")
    return savedTheme || "light"
  })

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove("light", "dark", "pastel")
    // Add the current theme class
    document.documentElement.classList.add(theme)
    // Save to localStorage
    localStorage.setItem("theme", theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
