import React from "react";

export default function SearchFilter({ search, setSearch }) {
  return (
    <div className=" lg:text-center ">
    <div className="mt-4 border-2 p-1 border-gray-200 rounded  w-[370px]  lg:w-[1000px] ">
        <i className="fa-solid fa-magnifying-glass absolute lg:top-58 sm:top-58 pt-2.5 text-gray-500 "></i>
      <input
        value={search}

        onChange={e => setSearch(e.target.value)}
        placeholder=" Search by name/class..."
        className=" ml-6 outline-0 "
      />
    </div>
    </div>
  );
}
