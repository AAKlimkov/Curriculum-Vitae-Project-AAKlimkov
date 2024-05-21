import { onError } from "@apollo/client/link/error";
import authService from "../services/authService";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      console.error(message);
      if (message === "Unauthorized") {
        authService.clearStorageAndLogout();
      }
    });
  }
  if (networkError) {
    console.error(networkError);
  }
});

export default errorLink;
