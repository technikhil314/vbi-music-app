import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import { useApi } from "./hooks/useApi";
import logo from "./logo.svg";
function App() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  console.log(isAuthenticated);
  const { loading, error, refresh, data } = useApi(
    `${process.env.REACT_APP_BASE_URL}/users`
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={loginWithRedirect}>
          {!isAuthenticated && !loading && "Not authenticated"}
          {isAuthenticated && loading && !data && "Loading..."}
          {isAuthenticated && !loading && data && data.message}
        </button>
      </header>
    </div>
  );
}

export default App;
