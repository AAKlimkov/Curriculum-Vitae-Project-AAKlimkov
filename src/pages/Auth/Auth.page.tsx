import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Tabs, Tab, AppBar } from '@mui/material'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { PageLoader } from 'components/PageLoader'
import { routes } from 'constants/routes'

const Auth = () => {
  const location = useLocation()
  const { t } = useTranslation()

  return (
    <>
      <AppBar>
        <Tabs value={location.pathname} centered>
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
      </AppBar>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Auth
