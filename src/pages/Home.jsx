import React from "react";

export default function Home({ onOpenAdmin }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-400">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          🎓 School Parents & Students Manager
        </h1>
        <p className="text-gray-600 mb-6">
          Manage parents and students easily with CRUD operations.
        </p>
        <button
          onClick={onOpenAdmin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition"
        >
          Open Admin Panel
        </button>
      </div>
    </div>
  );
}
