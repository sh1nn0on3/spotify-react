// export const Songs = React.createContext()
import React, { createContext, useState } from "react";
import DataSongs from "./data/songs.json";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    setSong(song);
  };

  return (
    <AppContext.Provider value={{ song, handleSong }}>
      {children}
    </AppContext.Provider>
  );
}
