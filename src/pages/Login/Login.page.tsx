import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from './login.module.less'

const Login = () => {
  const { t } = useTranslation()
  return (
    <form className={styles.form}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
        {t('Welcome Back')}
      </Typography>
    </form>
  )
}

export default Login
