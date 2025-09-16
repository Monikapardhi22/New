import React, { useState } from "react";

export default function Students({ parents, students, setStudents }) {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [parentId, setParentId] = useState("");

  const addStudent = () => {
    if (!name || !className || !parentId) return alert("Fill all fields");
    const newStudent = { id: Date.now(), name, class: className, parentId };
    setStudents([...students, newStudent]);
    setName(""); setClassName(""); setParentId("");
  };

  return (
    <div className="mt-4 text-[17px] shadow-lg rounded-3xl pl-14 p-4 pr-14 bg-white">
      <h3 className="font-semibold mt-4 text-[22px] ">Add Student</h3>
       Name -<input value={name} onChange={e => setName(e.target.value)}  className="border-[1px]  border-black   m-4 rounded-md px-3 w-[250px] py-1"  placeholder="Name" />
       <br/>
       Class - <input className="border-[1px] m-4  border-black  rounded-md px-3 py-1 w-[250px]" value={className} onChange={e => setClassName(e.target.value)} placeholder="Class" />
       <br/>
     <div className="text-center">
       <select  className="border-[1px] mt-4 mb-4 w-full border-black text-center  rounded-md px-1 py-1 "  value={parentId} onChange={e => setParentId(e.target.value)}>
        <option  className="border-[1px] mt-4  border-black  rounded-md px-1"  value="">Select Parent</option>
        {parents.map(p => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
     
      <br/>
      <button onClick={addStudent} className="bg-blue-500 focus:bg-blue-800 mt-4 w-[100px] text-white rounded-md p-1 ">Add</button>
      </div>
    </div>
  );
}
