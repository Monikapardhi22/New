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
    <div className="mt-4 text-[17px]">
      <h3 className="font-bold mt-4 text-[19px]">Add Student</h3>
       Name : <input value={name} onChange={e => setName(e.target.value)}  className="border-[1px]  border-black   m-4 rounded-lg px-1 py-1"  placeholder="Name" />
       <br/>
       Class : <input className="border-[1px] m-4 border-black  rounded-lg px-1 py-1" value={className} onChange={e => setClassName(e.target.value)} placeholder="Class" />
       <br/>
      <select  className="border-[1px] mt-4 border-black  rounded-lg px-1 py-1"  value={parentId} onChange={e => setParentId(e.target.value)}>
        <option  className="border-[1px] mt-4  border-black  rounded-lg px-1"  value="">Select Parent</option>
        {parents.map(p => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
      <br/>
      <button onClick={addStudent} className="bg-green-300 mt-4 w-[60px] text-black rounded-lg p-1">Add</button>
    </div>
  );
}
