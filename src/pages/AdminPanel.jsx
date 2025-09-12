import React, { useState, useEffect } from "react";
import Parents from "../components/Parents";
import Students from "../components/Students";
import ParentList from "../components/ParentList";
import StudentList from "../components/StudentList";
import SearchFilter from "../components/SearchFilter";
import { getData, setData } from "../utils/storage";

export default function AdminPanel({ onCloseAdmin }) {
  const [parents, setParents] = useState([]);
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("parents"); // default section

  useEffect(() => {
    setParents(getData("parents"));
    setStudents(getData("students"));
  }, []);

  useEffect(() => {
    setData("parents", parents);
    setData("students", students);
  }, [parents, students]);

  return (
    <div className="flex min-h-screen bg-blue-100">
      {/* --- Sidebar --- */}
      <div className="w-56 bg-white p-5 flex flex-col gap-3 border-r">
        {/* Back Button */}
        <button
          onClick={onCloseAdmin}
          className=" text-white px-4 py-2 rounded-md"
        >
          ⬅ 
        </button>

        {/* Navigation Buttons */}
        {[
          { key: "parents", label: "➕ Add Parent" },
          { key: "students", label: "➕ Add Student" },
          { key: "parentList", label: "📋 Parents List" },
          { key: "studentList", label: "📋 Students List" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 rounded-md text-left font-medium
              ${
                activeTab === tab.key
                  ? "bg-blue-400 text-white"
                  : " text-gray-700 hover:bg-gray-200"
              }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- Main Content --- */}
      <div className="flex-1 p-6 bg-white  ">
        {/* <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Admin Panel
        </h2> */}

        {activeTab === "parents" && (
          <Parents parents={parents} setParents={setParents} />
        )}

        {activeTab === "students" && (
          <Students
            parents={parents}
            students={students}
            setStudents={setStudents}
          />
        )}

        {activeTab === "parentList" && (
          <ParentList
            parents={parents}
            students={students}
            setParents={setParents}
          />
        )}

        {activeTab === "studentList" && (
          <>
            <SearchFilter search={search} setSearch={setSearch} />
            <StudentList
              students={students}
              setStudents={setStudents}
              search={search}
            />
          </>
        )}
      </div>
    </div>
  );
}
