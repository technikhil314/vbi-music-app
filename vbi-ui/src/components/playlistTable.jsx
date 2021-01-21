import useApi from "../hooks/useApi";
import { withAuthenticationRequiredOptions } from "../util";
import withAuthenticationRequired from "./withAuthenticationRequired";
import { Link } from "react-router-dom";
const PlaylistTable = (params) => {
  const { loading, data } = useApi(
    `${process.env.REACT_APP_BASE_URL}/api/playlists/all`
  );
  return (
    <section>
      <Link className="btn btn-primary" to="/createPlaylist">
        Create Playlist
      </Link>
      <h3 className="text-center">Your playlists</h3>
      <div className="row">
        <p className="col-8">Playlist name</p>
        <p className="col-4">Created on</p>
      </div>
      {data &&
        data.length &&
        data.map((playlist) => (
          <>
            <div className="row">
              <p className="col-8">
                <Link to={`playlist/${playlist.id}`}>{playlist.title}</Link>
              </p>
              <p className="col-4 text-muted">
                {new Date(playlist.createdAt).toLocaleString()}
              </p>
            </div>
          </>
        ))}
      {!loading && !data.length && (
        <p className="lead text-center">
          You don't have any playlists created. Please create one from{" "}
          <Link to="/createPlaylist">here</Link>
        </p>
      )}
      {loading && !data && (
        <p className="lead text-center">Loading your playlists...</p>
      )}
    </section>
  );
};

export default withAuthenticationRequired(
  PlaylistTable,
  withAuthenticationRequiredOptions
);
