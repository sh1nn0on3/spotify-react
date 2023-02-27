import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../../Context";

const ListSong = () => {
  const {DataSongs , handleSetSong, song} = useContext(Songs);
  // console.log(DataSongs);
  const [idSong, setIdSong] = useState(0)
  const handlePlaySong = (idSong) =>{
    setIdSong(idSong)
    handleSetSong(idSong)
  }
  useEffect(() => {
    setIdSong(song.id)
  }, [song])
  
  return (
    <div className="col-span-2 overflow-y-scroll ">
      <table className="w-full table-auto ">
        <thead>
          <tr className="text-white text-center h-12">
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i class="fa-solid fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr key={index} className={`h-12 text-gray-400 bg-slate-800 hover:bg-slate-600 ${song.id === idSong && "bg-slate-500 text-teal-400 " } `} onClick={()=>handlePlaySong(song.id)} >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center"><a href={song.url}><i class="fa-solid fa-download"></i></a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSong;
