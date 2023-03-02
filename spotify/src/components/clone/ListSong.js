import React, { useContext, useState } from "react";
import { AppContext } from "../../Context";

export default function ListSong() {
  const { song, DataSongs, setSong } = useContext(AppContext);
  const [idSong, setidSong] = useState(0);

  const handleClick = (idSong) => {
    setidSong(idSong);
    setSong(idSong);
  };

  return (
    <div className="col-span-2 overflow-y-scroll  ">
      <table className="w-full table-auto">
        <thead className="h-12 text-white">
          <tr>
            <th className="w-[10%] ">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%] ">Author</th>
            <th className="w-[10%] ">
              <i className="fa-solid fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="">
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-teal-800 h-12 hover:bg-teal-900 text-center`}
              onClick={handleClick}
            >
              <td className="w-[10%] ">{index + 1}</td>
              <td className="text-left ">{song.name}</td>
              <td className="w-[10%]">{song.author} </td>
              <td className="w-[10%] ">
                <a href={song.url}>
                  <i className="fa-solid fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
          {/* <tr className="text-center">
            <td className="w-[10%] ">1</td>
            <td className="text-left ">1</td>
            <td className="w-[10%] ">1</td>
            <td className="w-[10%] ">1</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
