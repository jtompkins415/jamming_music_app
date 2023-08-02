

function Track({id, title, artist, album, handleTrackAdd}){
    
    const addToPlaylist = () => {
        handleTrackAdd({id,title, artist, album})
    }

    return (
        <div className="track-main-container">
            <div className="track-title-container">
                <h4>{title}</h4>
            </div>
            <div className="track-detail-container">
                <p>{artist}</p>
                <p>{album}</p>
            </div>
            <div className="track-button-container">
                <button onClick={addToPlaylist}>Add To Playlist</button>
            </div>
        </div>
    );
};

export default Track;