import React, { useContext } from "react";
import { Songs } from "../../Context";

const DetailSong = () => {
  const {song} = useContext(Songs)
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-xl text-cyan-400 font-bold">Now Playing</h2>
      <h2 className="text-3xl ml-3 mt-2 text-gray-500">{song.name}</h2>
      <div className="w-[240px] m-auto mt-10">
        <img
          className="w-full"
          src={song.links.images[0].url}
          alt="avatar"
        />
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img
          className="w-[70px] rounded-full app-logo"
          src={song.links.images[1].url}
          alt="avatar"
        />
        <span className="text-white">{song.author} </span>
      </div>
    </div>
  );
};

export default DetailSong;
