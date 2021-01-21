import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import "./App.css";
import CreatePlaylist from "./components/createPlaylist";
import Playlist from "./components/playlist";
import PlaylistTable from "./components/playlistTable";
import SongsList from "./components/songsList";
import Toast from "./components/toast";
import toastStore from "./store/toast";
import authStore from "./store/auth";

function App() {
  const {
    isAuthenticated,
    logout,
    loginWithPopup,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();
  const toggleToast = toastStore((state) => state.toggleToast);
  const setToken = authStore((state) => state.setToken);
  useEffect(() => {
    if (isAuthenticated) {
      const getAccessToken = async () => {
        const accessToken = await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUD_URL,
          scope: "read:current_user update:current_user_metadata",
        });
        setToken(accessToken);
      };
      getAccessToken();
    }
    if (!Cookies.get("loggedIn") && isAuthenticated === true && !isLoading) {
      toggleToast({
        toggleState: true,
        component: () => <p className="m-0">Login Success</p>,
        variant: "success",
      });
      Cookies.set("loggedIn", true, { path: "" });
    }
    if (Cookies.get("loggedIn") && isAuthenticated === false && !isLoading) {
      toggleToast({
        toggleState: true,
        component: () => <p className="m-0">Logout Success</p>,
        variant: "success",
      });
      Cookies.remove("loggedIn", { path: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isLoading]);
  return (
    <Router>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/" className="font-weight-bolder">
          Musilicious
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/songs">
              Songs
            </Link>
            <Link className="nav-link" to="/playlist">
              Your playlists
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Link
              className="nav-link"
              onClick={async (e) => {
                e.preventDefault();
                isAuthenticated ? logout() : await loginWithPopup();
              }}
            >
              {!isLoading ? (
                <>{isAuthenticated ? "Logout" : "Login"}</>
              ) : (
                <>Checking...</>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main className="main container">
        <Toast />
        <Route path="/" exact>
          <Redirect to="/songs" />
        </Route>
        <Route path="/songs" exact component={SongsList} />
        <Route path="/playlist/" exact component={PlaylistTable} />
        <Route path="/playlist/:id" exact component={Playlist} />
        <Route path="/createPlaylist" exact component={CreatePlaylist} />
      </main>
    </Router>
  );
}

export default App;
