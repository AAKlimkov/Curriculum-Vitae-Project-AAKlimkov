import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { IconButton, useTheme } from '@mui/material'
import { theme$ } from 'theme/theme'

export const ThemeSwitcher = () => {
  const theme = useTheme()

  const toggleTheme = () => {
    const currentTheme = theme.palette.mode === 'dark' ? 'light' : 'dark'
    theme$(currentTheme)
  }

  return (
    <IconButton color={'primary'} onClick={toggleTheme}>
      {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  )
}
