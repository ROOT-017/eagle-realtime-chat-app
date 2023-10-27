"use client";

import React from "react";

export default function Error() {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col">
      <p>Oups and erro occured!</p>
      <p>Let &lsquos; give is a try</p>
      <button className="p-2 rounded-xl text-white bg-gradient-to-r from-oxford-blue hover:from-oxford-blue-200  hover:to-emerald-300 to-emerald-600">
        Try agin
      </button>
    </div>
  );
}
