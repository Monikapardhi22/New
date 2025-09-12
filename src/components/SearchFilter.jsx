import React from "react";

export default function SearchFilter({ search, setSearch }) {
  return (
    <div className="mt-4 w-full">
        <i className="fa-solid fa-magnifying-glass"></i>
      <input
        value={search}

        onChange={e => setSearch(e.target.value)}
        placeholder=" Search students by name/class..."
        className="border-2 border-black p-1 w-[370px] rounded-lg "
      />
    </div>
  );
}
