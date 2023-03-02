import React, { useState } from "react";
import DetailSong from "./components/spotify/DetailSong";
import ListSong from "./components/spotify/ListSong";
import Navbar from "./components/spotify/Navbar";
import Playing from "./components/spotify/Playing";
import "./App.css";
import DataSongs from "./data/songs.json"
import { Songs } from "./Context";

const App = () => {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) =>{
    const song = DataSongs.find((song) => song.id === idSong)
    setSong(song)
  }
  return (
    <div>
      <Songs.Provider value={{DataSongs, song , handleSetSong}}>
        <Navbar />
        <div className="grid grid-cols-3 h-screen-navbar-player bg-slate-700 overflow-hidden">
          <DetailSong />
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
};

export default App;
