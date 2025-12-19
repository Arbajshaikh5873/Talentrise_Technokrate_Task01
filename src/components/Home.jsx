import React, { createContext, useContext, useMemo, useState } from "react";
import Navbar from "./Navbar";
import AddEdit from "./AddEdit";
import ViewPage from "./ViewPage";
import { profileContext } from "./Container";

function Home() {
  const { profileData } = useContext(profileContext);
  return (
    <div className=" bg-slate-900 h-screen ">
      {profileData.length == 0 && (
        <div className="text-center font-bold text-red-500">
          <p>no data available....</p>
        </div>
      )}
      {profileData.length == 0 && <AddEdit />}

      {profileData.length > 0 && <ViewPage />}
    </div>
  );
}

export default Home;
