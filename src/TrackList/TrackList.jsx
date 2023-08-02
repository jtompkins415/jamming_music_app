import Track from "../Track/Track";


function TrackList({trackData, input, handleTrackAdd}) {
   
    const filteredData = trackData.filter((el) => {
        
        if(input === ''){
            return el;
        }else{
            return el.title.toLowerCase().includes(input);
        }
    })

    return (
        <div className="tracklist-main-container">
            <div className="tracklist-title-container">
                <h3>Tracks</h3>
            </div>
            <div className="tracklist-content-container">
                {
                    filteredData.map((track) => (
                        <Track key={track.id} title={track.title} artist={track.artist} album={track.album} handleTrackAdd={handleTrackAdd}/>
                    ))
                }
            </div>
        </div>
    )
};

export default TrackList;

