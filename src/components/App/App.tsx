import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import languages from '../../languageges'
import { ApolloProvider, gql, useLazyQuery } from '@apollo/client'
import type { AuthInput, AuthResult } from 'cv-graphql'
import { RouterProvider } from 'react-router-dom'
import { client } from '../../apolo/apolo'
import router from '../../router/router'
import ThemeProvider from 'theme/themeProvider'

i18n.use(initReactI18next).init(languages)

const LOGIN = gql`
  query Login($auth: AuthInput!) {
    login(auth: $auth) {
      user {
        id
        email
      }
      access_token
    }
  }
`

const GET_LANGUAGES_QUERY = gql`
  query GetLanguages {
    languages {
      id
      created_at
    }
  }
`

export type LoginArgs = {
  auth: AuthInput
}

export type LoginResult = {
  login: AuthResult
}

export const App1 = () => {
  const [getUser, { loading, error, data }] = useLazyQuery(LOGIN, {
    variables: {
      auth: {
        email: 'aaklimkov@gmail.com',
        password: 'qweasd',
      },
    },
  })
  const [getLanguages] = useLazyQuery(GET_LANGUAGES_QUERY)
  return (
    <>
      <button
        onClick={async () => {
          getUser({
            onCompleted: (data) => {
              localStorage.setItem('token', data.login.access_token)
            },
          })
        }}
      >
        Click me!
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Login Successful!</p>}
      <button
        onClick={() =>
          getLanguages({
            onCompleted: (data) => console.log(data),
          })
        }
      >
        Load Languages
      </button>
    </>
  )
}

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
