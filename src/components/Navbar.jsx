import React from "react";
import { NavLink } from "react-router";

// Navbar Component
function Navbar({ currentView, setCurrentView }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-white">Profile Manager</h1>
          <div className="flex gap-3">
            <button
              onClick={() => setCurrentView("addEdit")}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 ${
                currentView === "addEdit"
                  ? "bg-white text-blue-600 shadow-md"
                  : "bg-blue-500 text-white hover:bg-blue-400"
              }`}
            >
              Add New
            </button>
            <button
              onClick={() => setCurrentView("viewPage")}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 ${
                currentView === "viewPage"
                  ? "bg-white text-purple-600 shadow-md"
                  : "bg-purple-500 text-white hover:bg-purple-400"
              }`}
            >
              Show All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
