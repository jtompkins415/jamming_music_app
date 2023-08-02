import {useState} from 'react';
import trackData from './Track/TrackObject.json';
import TrackList from './TrackList/TrackList';
import SearchBar from './SearchBar/SearchBar';
import Playlist from './Playlist/Playlist';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('')
  const [playlistData, setPlaylistData] = useState([])

  const handleUserInput = (evnt) => {
    const lowerCase = evnt.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  //Handles adding new track to playlist

  const handleTrackAdd = (track) => {
    setPlaylistData((listData) => ([
      ...listData,
      track
    ]));
  };

    console.log(playlistData);

  return (
    <>
      <div className='app-main-container'>
        <div className='app-searchbar-container'>
            <SearchBar handleUserInput={handleUserInput} />
        </div>
        <div className='app-tracklist-container'>
          <TrackList trackData={trackData} handleTrackAdd={handleTrackAdd} input={inputText}/>
        </div>
        <div className='app-playlist-container'>
          <Playlist playlistData={playlistData} />
        </div>
      </div>
      
    </>
  )
}

export default App
