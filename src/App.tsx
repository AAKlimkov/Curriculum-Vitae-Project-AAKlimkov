import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import LoginForm from "./LoginForm";
import languages from "./languageges";
// import MaterialUIDemo from "./Material";
import { gql, useLazyQuery } from "@apollo/client";
import type { AuthInput, AuthResult } from "cv-graphql";

i18n.use(initReactI18next).init(languages);

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
`;

export type LoginArgs = {
  auth: AuthInput;
};

export type LoginResult = {
  login: AuthResult;
};
// const useLogin = () => {
//   return useLazyQuery<LoginResult, LoginArgs>(LOGIN);
// };

function App() {
  const [getUser, { loading, error, data }] = useLazyQuery(LOGIN, {
    variables: {
      auth: {
        email: "aaklimkov@gmail.com",
        password: "qweasd",
      },
    },
  });

  return (
    <>
      {/* <LoginForm />
      <MaterialUIDemo /> */}
      <button
        onClick={async () => {
          getUser({
            onCompleted: (user) => console.log(user),
          });
        }}
      >
        Click me!
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Login Successful!</p>}
    </>
  );
}

export default App;
