import React, { useState, useEffect } from "react";
import Parents from "../components/Parents";
import Students from "../components/Students";
import ParentList from "../components/ParentList";
import StudentList from "../components/StudentList";
import SearchFilter from "../components/SearchFilter";
import { getData, setData } from "../utils/storage";

export default function AdminPanel({onCloseAdmin}) {
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
    <div className=" min-h-screen " style={{backgroundColor:'aliceblue'}}>

      <div className="underline text-4xl font-semibold mb-4 pt-6 italic text-center text-blue-700">
        Admin Panel 
      </div>
      {/* --- Sidebar --- */}
      <div className="w-full  p-5 flex items-center justify-around  gap-3" style={{backgroundColor:'aliceblue'}}>
      {/* arrow code for back */}
       <div className="text-3xl cursor-pointer " onClick={onCloseAdmin}>
        &#8592;
       </div>

       
        {[
          { key: "parents", label: "➕ Add Parent" },
          { key: "students", label: "➕ Add Student" },
          { key: "parentList", label: " Parents List" },
          { key: "studentList", label: " Students List" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`w-24 px-3.5 py-3 rounded text-left font-medium
              ${
                activeTab === tab.key
                  ? "bg-blue-700 text-white"
                  : " text-gray-700 hover:bg-gray-200"
              }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- Main Content --- */}
      <div className="flex p-6 items-center justify-center   " style={{backgroundColor:'aliceblue'}}>
        

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
          <div className="flex flex-col">
          {/* <SearchFilter search={search} setSearch={setSearch} /> */}
          <ParentList
            parents={parents}
            students={students}
            setParents={setParents}
            search={search}
          />
          </div>
        )}

        {activeTab === "studentList" && (
          <div className="flex flex-col  ">
            <SearchFilter search={search} setSearch={setSearch} />
            <StudentList
              students={students}
              setStudents={setStudents}
              search={search}
            />
          </div>
        )}
      </div>
    </div>
  );
}
