import Track from "../Track/Track";

function Playlist({playlistData}) {


    return (
        <div className="playlist-main-container">
            <div className="playlist-title-form-container">
                <h3>Playlist Tracks</h3>
            </div>
            <div className="playlist-content-container">
                {
                    playlistData.map((track) => (
                        <Track key={track.id} title={track.title} artist={track.artist} album={track.album} handleTrackAdd={handleTrackAdd}/> 
                    ))
                }
            </div>       
        </div>
    )
};

export default Playlist;