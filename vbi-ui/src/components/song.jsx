export const Song = ({ song }) => {
  return (
    <article className="row mb-2 align-items-center">
      <div className="col-1">
        <img src={`${song.image}/200x200`} className="songImage"></img>
      </div>
      <div className="col-11">
        <header className="font-weight-bolder">{song.title}</header>
        <dl className="row mb-0">
          <div className="col-6">
            <dt>Album</dt>
            <dd>
              {song.albums.map((album) => (
                <>{album.title}</>
              ))}
            </dd>
          </div>
          <div className="col-6">
            <dt>Artist(s)</dt>
            <dd>
              {song.artists.map((artist) => (
                <>{`${artist.firstName} ${artist.lastName}`}</>
              ))}
            </dd>
          </div>
        </dl>
      </div>
      <hr className="col-12" />
    </article>
  );
};

export default Song;
