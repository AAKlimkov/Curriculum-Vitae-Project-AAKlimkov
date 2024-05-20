import { PaletteMode, createTheme } from '@mui/material'
import { palette } from './palette'

export const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: palette[mode],
  })
}

export const setThemeToStorage = (theme: string) => {
  localStorage.setItem('theme', theme)
}

export const getThemeFromStorage = () => {
  const theme = localStorage.getItem('theme')

  return theme || 'dark'
}
