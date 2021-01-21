import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import "./App.css";
import { useApi } from "./hooks/useApi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  console.log(isAuthenticated);
  const { loading, data } = useApi(
    `${process.env.REACT_APP_BASE_URL}/api/playlists/all`
  );
  return (
    <Router>
      <div className="App">
        <Route path="/public">
          <h1>Public Playlists</h1>
        </Route>
        <Route path="/login">
          <h1>Public Playlists</h1>
        </Route>
        <Route
          path="/protected"
          component={withAuthenticationRequired(
            () => (
              <div>Protected</div>
            ),
            {
              onRedirecting: () => (
                <div>Redirecting you to the login page...</div>
              ),
            }
          )}
        ></Route>
      </div>
    </Router>
  );
}

export default App;
