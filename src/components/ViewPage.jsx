import React, { useContext } from "react";
import UserCart from "./UserCard";
import { profileContext } from "./Container";
import UserCard from "./UserCard";

// ViewPage Component
function ViewPage({ setCurrentView }) {
  const { profileData } = useContext(profileContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {profileData.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md mx-auto">
              <svg
                className="w-24 h-24 mx-auto text-gray-400 mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                No Profiles Yet
              </h2>
              <p className="text-gray-600 mb-6">
                Start by adding your first profile!
              </p>
              <button
                onClick={() => setCurrentView("addEdit")}
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                Add Profile
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">
                All Profiles
              </h2>
              <p className="text-purple-300">
                Total: {profileData.length} profile
                {profileData.length !== 1 ? "s" : ""}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profileData.map((user) => (
                <UserCard
                  key={user._id}
                  user={user}
                  setCurrentView={setCurrentView}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ViewPage;
