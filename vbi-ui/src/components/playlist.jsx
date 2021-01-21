import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { withAuthenticationRequiredOptions } from "../util";
import withAuthenticationRequired from "./withAuthenticationRequired";
const Playlist = (params) => {
  const { id } = useParams();
  const { loading, data } = useApi(
    `${process.env.REACT_APP_BASE_URL}/api/playlists/${id}`
  );
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="row">
      <h4 className="col-12 mb-4">Playlist Name: {data.title}</h4>
      <h6 className="col-12">Contains following songs</h6>
      {data.songs.map((song) => (
        <p className="col-12">{song.title}</p>
      ))}
    </section>
  );
};

export default withAuthenticationRequired(
  Playlist,
  withAuthenticationRequiredOptions
);
