import useGetSongs from "../hooks/useGetSongs";
import { Song } from "./song";
const SongsList = () => {
  const songs = useGetSongs();
  return (
    <section>
      {songs
        ? songs.map((song) => {
            return <Song song={song} />;
          })
        : "Loading songs list..."}
    </section>
  );
};

export default SongsList;
