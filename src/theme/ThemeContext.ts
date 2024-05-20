import { createContext, useContext } from 'react'
import { PaletteMode } from '@mui/material'

interface ThemeContextProps {
  currentTheme: PaletteMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | null>(null)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeContext
