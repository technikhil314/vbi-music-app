import { useEffect, useState } from 'react';
const useGetSongs = () => {
    const [songs, setSongs] = useState(null);
    useEffect(() => {
        const getAllSongs = async () => {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/songs/all`);
            const json = await res.json();
            setSongs(json);
        }
        getAllSongs();
    }, [])
    return songs;
};
export default useGetSongs;