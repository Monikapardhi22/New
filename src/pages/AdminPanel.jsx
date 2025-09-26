import React, { useState, useEffect } from "react";

import Parents from "../Components/Parents";
import Students from "../components/Students";
import ParentList from "../components/ParentList";
import StudentList from "../components/StudentList";
import SearchFilter from "../components/SearchFilter";
import { getData, setData } from "../utils/storage";

export default function AdminPanel({onCloseAdmin}) {
  const [parents, setParents] = useState([]);
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("parentList"); // default section
  const[edit,setEdit]=useState("");
  const [editParent, setEditParent] = useState(null);
  const [studentEdit, setStudentEdit] = useState(null);
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
      <div className="w-full   p-5 flex items-center justify-around  gap-3" style={{backgroundColor:'aliceblue'}}>
      {/* arrow code for back */}
       <div className="text-3xl cursor-pointer hover:bg-gray-200 p-5 rounded" onClick={onCloseAdmin}>
        &#8592;
       </div>

       
        {[
          // { key: "parents", label: "➕ Add Parent" },
          // { key: "students", label: "➕ Add Student" },
          { key: "parentList", label: " Parents List" },
          { key: "studentList", label: " Students List" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`w-34 px-3.5 py-3 rounded text-left font-medium
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
  <Parents 
    parents={parents} 
    setParents={setParents} 
    setActiveTab={setActiveTab}   
    editParent={editParent}          
      setEditParent={setEditParent}    
  />
)}


        {activeTab === "students" && (
          <Students
            parents={parents}
            students={students}
            setStudents={setStudents}
             setEdit={setEdit} 
              edit={edit}
               setActiveTab={setActiveTab}    
    studentEdit={studentEdit}      
    setStudentEdit={setStudentEdit}
          />
        )}

        {/* {activeTab === "parentList" && (
          <div className="flex flex-col">
          
          <ParentList
            parents={parents}
            students={students}
            setParents={setParents}
            search={search}
          />
          </div>
        )} */}
        {activeTab === "parentList" && (
  <div className="flex flex-col">
    <ParentList
      parents={parents}
      students={students}
      setParents={setParents}
      setStudents={setStudents}
      search={search}
      setActiveTab={setActiveTab}  
       setEditParent={setEditParent}
    />
  </div>
)}
 
        {activeTab === "studentList" && (
          <div className="flex flex-col  ">
            <SearchFilter search={search} setSearch={setSearch} />
            <StudentList
            parents={parents}
              students={students}
              setStudents={setStudents}
              search={search}
              setEdit={setEdit} 
              edit={edit}
              setActiveTab={setActiveTab}     // 👈 pass karo
    setStudentEdit={setStudentEdit} // 👈 pass karo
            />
          </div>
        )}
      </div>
    </div>
  );
}
