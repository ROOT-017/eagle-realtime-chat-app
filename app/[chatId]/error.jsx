"use client";

import React from "react";

export default function Error({ error, reset }) {
  console.log(error);
  return (
    <div className="h-full w-full flex justify-center items-center flex-col">
      <p className="pb-2">Oups and error occured!</p>
      <p className="pb-2">Let&lsquo;s give is a try</p>
      {error && <p>{error}</p>}
      <button
        onClick={() => reset()}
        className="p-2 rounded-xl text-white bg-gradient-to-r from-oxford-blue hover:from-oxford-blue-200  hover:to-emerald-300 to-emerald-600"
      >
        Try agin
      </button>
    </div>
  );
}
