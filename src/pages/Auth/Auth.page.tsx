import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Tabs, Tab, AppBar, Box } from '@mui/material'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { PageLoader } from 'components/PageLoader'
import { routes } from 'constants/routes'
import { LanguageSelect } from '@components/LanguageSelect'
import LanguageIcon from '@mui/icons-material/Language'

const Auth = () => {
  const location = useLocation()
  const { t } = useTranslation()

  console.log(t)

  return (
    <>
      <AppBar sx={{ flexDirection: 'row', padding: '0 16px' }}>
        <Tabs sx={{ flexGrow: 1 }} value={location.pathname} centered>
          <Tab
            value={routes.authRoutes.login}
            label={t('Login')}
            component={NavLink}
            to={routes.authRoutes.login}
          />
          <Tab
            value={routes.authRoutes.signup}
            label={t('Signup')}
            component={NavLink}
            to={routes.authRoutes.signup}
          />
        </Tabs>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LanguageIcon color="primary" />
          <LanguageSelect />
        </Box>
      </AppBar>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Auth
