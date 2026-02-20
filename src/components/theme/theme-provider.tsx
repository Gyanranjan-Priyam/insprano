"use client"

import * as React from "react"

export type Theme = "insprano"
export type TronIntensity = "none" | "light" | "medium" | "heavy"

const INTENSITY_KEY = "insprano-theme-intensity"

// Single theme for INSPRANO
export const themes: { id: Theme; name: string; god: string; color: string }[] = [
  { id: "insprano", name: "INSPRANO", god: "Techno-Cultural", color: "#FF7A18" },
]

const intensityIds = new Set(["none", "light", "medium", "heavy"] as TronIntensity[])

export const tronIntensities: { id: TronIntensity; name: string; description: string }[] = [
  { id: "none", name: "Off", description: "Standard style" },
  { id: "light", name: "Light", description: "Subtle glows and enhanced borders" },
  { id: "medium", name: "Medium", description: "Glowing borders with corner brackets" },
  { id: "heavy", name: "Heavy", description: "Full aesthetic with animations" },
]

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  tronIntensity: TronIntensity
  setTronIntensity: (intensity: TronIntensity) => void
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = React.useState<Theme>("insprano")
  const [tronIntensity, setIntensityState] = React.useState<TronIntensity>("medium")

  React.useEffect(() => {
    // Set default intensity
    const storedIntensity = localStorage.getItem(INTENSITY_KEY)
    if (storedIntensity && intensityIds.has(storedIntensity as TronIntensity)) {
      setIntensityState(storedIntensity as TronIntensity)
    }
    // Set intensity on DOM
    document.documentElement.setAttribute("data-tron-intensity", tronIntensity)
  }, [tronIntensity])

  const setTheme = React.useCallback((_theme: Theme) => {
    // Single theme — no-op
  }, [])

  const setTronIntensity = React.useCallback((newIntensity: TronIntensity) => {
    setIntensityState(newIntensity)
    localStorage.setItem(INTENSITY_KEY, newIntensity)

    if (newIntensity === "none") {
      document.documentElement.removeAttribute("data-tron-intensity")
    } else {
      document.documentElement.setAttribute("data-tron-intensity", newIntensity)
    }
  }, [])

  const value = React.useMemo(
    () => ({ theme, setTheme, tronIntensity, setTronIntensity }),
    [theme, setTheme, tronIntensity, setTronIntensity]
  )

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeProviderContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
