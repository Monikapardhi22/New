import React, { useState, useEffect } from "react";

export default function Students({ parents, students, setStudents, edit, setEdit }) {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [parentId, setParentId] = useState("");

  // Agar edit mode me ho, values set kar do
  useEffect(() => {
    if (edit) {
      setName(edit.name);
      setClassName(edit.class);
      setParentId(edit.parentId || ""); // previous parentId bhi set karo
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !className || !parentId) {
      alert("Please fill all fields and select a parent.");
      return;
    }

    if (edit) {
      // update existing student
      setStudents(
        students.map((s) =>
          s.id === edit.id ? { ...s, name, class: className, parentId } : s
        )
      );
      setEdit(null); // reset edit mode
    } else {
      // add new student
      setStudents([
        ...students,
        { id: Date.now(), name, class: className, parentId },
      ]);
    }

    // reset form
    setName("");
    setClassName("");
    setParentId("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 text-[17px] shadow-lg rounded-3xl pl-14 p-4 pr-14 bg-white"
    >
      <h3 className="font-semibold mt-4 text-[22px] ">
        {edit ? "Edit Student" : "Add Student"}
      </h3>

      <div className="mt-4">
        Name -{" "}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-[1px] border-black m-4 rounded-md px-3 w-[250px] py-1"
          placeholder="Name"
        />
        <br />

        Class -{" "}
        <input
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="border-[1px] m-4 border-black rounded-md px-3 py-1 w-[250px]"
          placeholder="Class"
        />
        <br />

        Parent -{" "}
        <select
          value={parentId}
          onChange={(e) => setParentId(e.target.value)}
          className="border-[1px] mt-4 mb-4 w-full border-black text-center rounded-md px-1 py-1"
        >
          <option value="">Select Parent</option>
          {parents.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 focus:bg-blue-800 mt-4 w-[150px] text-white rounded-md p-2"
        >
          {edit ? "Update Student" : "Add Student"}
        </button>
      </div>
    </form>
  );
}
