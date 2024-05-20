import { ThemeProvider as MuiProvider } from '@mui/material/styles'
import { PropsWithChildren, useState } from 'react'
import { getTheme, getThemeFromStorage } from './theme'
import { PaletteMode } from '@mui/material'

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const storageTheme = getThemeFromStorage()
  const [currentTheme, setCurrentTheme] = useState<PaletteMode>(storageTheme ? 'dark' : 'light')
  if (currentTheme != 'dark') {
    setCurrentTheme('dark')
  }
  const theme = getTheme(currentTheme)
  return <MuiProvider theme={theme}>{children}</MuiProvider>
}

export default ThemeProvider
