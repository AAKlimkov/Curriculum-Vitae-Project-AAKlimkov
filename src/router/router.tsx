import { createBrowserRouter } from 'react-router-dom'
import { authRoutes } from '@constants/routes'
import { AuthPage } from 'pages/Auth'
import { Login } from 'pages/Login'
import { SignUp } from 'pages/SignUp'

const router = createBrowserRouter([
  {
    element: <AuthPage />,
    children: [
      {
        path: authRoutes.login,
        element: <Login />,
      },
      {
        path: authRoutes.signup,
        element: <SignUp />,
      },
    ],
  },
])

export default router
