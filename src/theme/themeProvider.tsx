import { ThemeProvider as MuiProvider } from '@mui/material/styles'
import { PropsWithChildren, useMemo, useState } from 'react'
import { getTheme, getThemeFromStorage, theme$ } from './theme'
import { PaletteMode } from '@mui/material'
import { useReactiveVar } from '@apollo/client'

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const themeeVar = useReactiveVar(theme$)
  const storageTheme = getThemeFromStorage()
  const [currentTheme, setCurrentTheme] = useState<PaletteMode>(storageTheme ? 'dark' : 'light')
  if (currentTheme != 'dark') {
    setCurrentTheme('dark')
  }
  const theme = useMemo(() => {
    if (themeeVar === 'dark') {
      return getTheme('dark')
    }

    return getTheme('light')
  }, [themeeVar])

  return <MuiProvider theme={theme}>{children}</MuiProvider>
}

export default ThemeProvider
