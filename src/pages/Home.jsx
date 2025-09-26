import React from "react";

export default function Home({ onOpenAdmin }) {
  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div className="bg-blue-400 shadow-lg rounded-xl p-8 lg:max-w-md text-center w-[350px] ">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          🎓 School Parents & Students Manager
        </h1>
        <p className="text-gray-600 mb-6">
          Manage parents and students. 
        </p>
        <button
          onClick={onOpenAdmin}
          className="bg-white hover:bg-blue-700 hover:text-blue-50 text-blue-700 font-medium px-5 py-2.5 rounded-lg transition"
        >
          Open Admin Panel
        </button>
      </div>
    </div>
  );
}
