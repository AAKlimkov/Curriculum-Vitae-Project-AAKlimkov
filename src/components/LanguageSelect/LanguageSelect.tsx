import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import i18n from 'i18n'

export const LanguageSelect = () => {
  const handleChange = (event: SelectChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(event.target.value as string)
  }
  return (
    <Select onChange={handleChange} value="">
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="ru">Русский</MenuItem>
    </Select>
  )
}
