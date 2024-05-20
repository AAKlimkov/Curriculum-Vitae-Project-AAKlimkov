import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import i18n from 'i18n'
import { useEffect, useState } from 'react'

export const LanguageSelect = () => {
  const [lang, setLang] = useState<string>('en')

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng')
    if (storedLang) {
      setLang(storedLang)
    }
  }, [])

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedLang = event.target.value
    i18n.changeLanguage(selectedLang)
    setLang(selectedLang)
  }

  return (
    <Select
      onChange={handleChange}
      value={lang} 
      renderValue={(lang: string) => lang.toUpperCase()}
      sx={{
        boxShadow: 'none',
        '.MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: 0,
        },
        '.MuiSvgIcon-root ': {
          fill: 'white',
        },
      }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="ru">Русский</MenuItem>
    </Select>
  )
}
