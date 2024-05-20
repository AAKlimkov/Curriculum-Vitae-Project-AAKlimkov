import { PaletteMode, createTheme } from '@mui/material'
import { palette } from './palette'
import { makeVar } from '@apollo/client'

export const theme$ = makeVar('dark')

export const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: palette[mode],
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#2e2e2e' : '#121212',
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            marginTop: 'auto',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: '#f5f5f7',
            minWidth: 150,
            '&.active': {
              color: '#c63031',
              fontWeight: 600,
            },
          },
        },
      },
    },
  })
}

export const setThemeToStorage = (theme: string) => {
  localStorage.setItem('theme', theme)
}

export const getThemeFromStorage = () => {
  const theme = localStorage.getItem('theme')

  return theme || 'dark'
}
