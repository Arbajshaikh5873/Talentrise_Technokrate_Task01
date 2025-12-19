import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function UserCart({ user }) {
  return (
    <div className="w-[75%] mx-auto  border-white border-2 m-2 ">
      <div className="bg-blue-500 text-white p-2 rounded-2xl  border-white border-2 m-2">
        <div>
          <img src={`${user.imagePreview}`} alt="" />
        </div>

        <div>
          Name : <strong>{user.name}</strong>
        </div>

        <div>
          email : <strong>{user.email}</strong>
        </div>

        <div>
          phone : <strong>{user.phone}</strong>
        </div>

        <div>
          address : <strong>{user.address}</strong>
        </div>

        <div>
          <button className="bg-red-500 p-2 m-2 ">
            <MdDeleteForever />
          </button>

          <button className="bg-red-500 p-2 m-2 ">
            <FaRegEdit />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCart;
