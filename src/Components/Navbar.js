import React, { useState } from "react";
import Main from "./Main";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className="">
        <h1 className="text-black font-semibold text-xl mt-5">
          Search by Book Name
        </h1>
        <input
          placeholder="enter book name...."
          type="search"
          className="border border-black p-2"
          value={search}
          onChange={(e) => handleSearch(setSearch(e.target.value))}
        />
      </div>
      <div className=" text-white mt-1 flex justify-end items-end ">
        <button className="p-2 border border-white bg-green-500 mr-10 rounded-md">
          My Bookshell
        </button>
      </div>
      <div>
        <Main search={search} />
      </div>
    </div>
  );
};

export default Navbar;
