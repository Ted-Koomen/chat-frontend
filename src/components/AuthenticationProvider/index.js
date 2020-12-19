import React from "react";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import App from '../App';
import { userContext } from '../../contexts/UserContext.js';


const AuthenticationProvider = ({children}) => {
  const [authState, setAuthState] = React.useState();
  const [user, setuser] = React.useState();

  React.useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setuser(authData);
    });
  });

  return authState === AuthState.SignedIn && user ? (
    <React.Fragment>
      <userContext.Provider value={user}>
        <App />
      </userContext.Provider>
      <AmplifySignOut />
    </React.Fragment>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default AuthenticationProvider