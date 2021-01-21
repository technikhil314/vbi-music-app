import React, { useState } from "react";
import useGetSongs from "../hooks/useGetSongs";
import authStore from "../store/auth";
import toastStore from "../store/toast";
import { withAuthenticationRequiredOptions } from "../util";
import withAuthenticationRequired from "./withAuthenticationRequired";
const CreatePlaylist = (params) => {
  const accessToken = authStore((state) => state.token);
  const toggleToast = toastStore((state) => state.toggleToast);

  const songs = useGetSongs();
  const [playlist, setPlaylist] = useState([]);
  const createPlaylist = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const json = {};
      formData.forEach(function (value, key) {
        json[key] = value;
      });
      await fetch(`${process.env.REACT_APP_BASE_URL}/api/playlists/create`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          name: json.playlistName,
          songs: playlist,
        }),
      });
      toggleToast({
        toggleState: true,
        component: () => <p className="m-0">Playlist created successfully</p>,
        variant: "success",
      });
    } catch (err) {
      toggleToast({
        toggleState: true,
        component: () => <p className="m-0">Something went wrong.</p>,
        variant: "danger",
      });
    }
  };
  const toggleSongFromPlaylist = (e) => {
    let newPlaylist = [...playlist];
    if (e.target.checked) {
      newPlaylist.push(e.target.value);
    } else {
      newPlaylist = newPlaylist.filter((song) => song !== e.target.value);
    }
    setPlaylist(newPlaylist);
  };
  return (
    <>
      <p>Select songs you want to add to your playlist.</p>
      <form className="form row" onSubmit={createPlaylist}>
        <div className="form-group col-12">
          <label htmlFor="playlistName">Playlist Name</label>
          <input
            className="form-control"
            type="text"
            id="playlistName"
            name="playlistName"
            required
          />
        </div>
        {songs
          ? songs.map((song) => {
              return (
                <div key={song.id} className="align-items-center col-6">
                  <input
                    type="checkbox"
                    id={song.id}
                    value={song.id}
                    name="selectedSongs"
                    defaultChecked={playlist.includes(song.id)}
                    className="mr-2"
                    onClick={(e) => toggleSongFromPlaylist(e)}
                  />
                  <label class="control-label mb-2" htmlFor={song.id}>
                    {song.title}
                  </label>
                </div>
              );
            })
          : "Loading songs list..."}
        <div className="form-group col-12 text-center mt-4">
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default withAuthenticationRequired(
  CreatePlaylist,
  withAuthenticationRequiredOptions
);
