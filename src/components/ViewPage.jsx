import React, { useContext } from "react";
import { profileContext } from "../App";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import UserCart from "./UserCart";

function ViewPage() {
  const { profileData } = useContext(profileContext);
  console.log("profileData inside ViewPage : ", profileData);

  return (
    <div>
      {profileData.map((user) => {
        return <UserCart user={user} />;
      })}
    </div>
  );
}

export default ViewPage;
