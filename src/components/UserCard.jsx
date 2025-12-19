import React, { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { editIdContext, profileContext } from "./Container";

// UserCard Component
function UserCard({ user, setCurrentView }) {
  const { setProfileData } = useContext(profileContext);
  const { setEditId } = useContext(editIdContext);

  const handleDelete = () => {
    if (
      window.confirm(`Are you sure you want to delete ${user.name}'s profile?`)
    ) {
      setProfileData((prev) =>
        prev.filter((profile) => profile._id !== user._id)
      );
    }
  };

  const handleEdit = () => {
    setEditId(user._id);
    setCurrentView("addEdit");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-24"></div>
      <div className="relative px-6 pb-6">
        <div className="flex justify-center -mt-16 mb-4">
          {user.imagePreview ? (
            <img
              src={user.imagePreview}
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center border-4 border-white shadow-xl">
              <span className="text-4xl font-bold text-white">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold text-gray-800">{user.name}</h3>

          <div className="space-y-2 text-left bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start">
              <span className="font-semibold text-gray-600 w-20">Email:</span>
              <span className="text-gray-800 flex-1 break-all">
                {user.email}
              </span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-600 w-20">Phone:</span>
              <span className="text-gray-800 flex-1">{user.phone}</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-600 w-20">Address:</span>
              <span className="text-gray-800 flex-1">{user.address}</span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleEdit}
              className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
