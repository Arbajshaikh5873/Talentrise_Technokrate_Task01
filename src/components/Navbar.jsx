import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div className="flex justify-end w-[75%]  bg-blue-600 mx-auto h-12 rounded-2xl ">
      <NavLink to={"/addEdit"}>
        <button className="bg-white text-blue-500 p-2 m-2 flex items-center justify-center rounded-xl">
          Add New
        </button>
      </NavLink>

      <NavLink to={"/viewPage"}>
        <button className="bg-white text-blue-500 p-2 m-2 text-center rounded-xl flex items-center justify-center">
          Show All
        </button>
      </NavLink>
    </div>
  );
}

export default Navbar;
