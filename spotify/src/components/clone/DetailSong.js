import React from "react";

export default function DetailSong() {
  return (
    <div className="cols-span-1 p-5">
      <div>
        <p className="font-bold text-sky-300 top-1 ">Now playing</p>
        <h2 className="text-xl font-mono text-rose-300">Sing me to sleep</h2>
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <img
          src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
          className="w-full rounded-lg"
          alt="#"
        />
        <div className="flex gap-3 mt-3 justify-center items-center">
          <img
            src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
            className="w-16 rounded-full "
            alt="#"
          />
          <h3 className="text-red-300 text-lg">Alan Walker</h3>
        </div>
      </div>
    </div>
  );
}
