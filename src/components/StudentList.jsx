import React, { useState } from "react";
import dlt from "../assets/delete.png";

export default function StudentList({ students, setStudents, search }) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editClass, setEditClass] = useState("");

  const deleteStudent = (id) => {
    if (window.confirm("Delete student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const handleEdit = (student) => {
    setEditId(student.id);
    setEditName(student.name);
    setEditClass(student.class);
  };

  const handleSave = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, name: editName, class: editClass } : s
      )
    );
    setEditId(null); // reset edit mode
  };

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.class.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 mt-3.5 text-center">Students List</h3>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 rounded-lg">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-4 py-2 border font-medium">Name</th>
              <th className="px-4 py-2 border font-medium">Class</th>
              <th className="px-4 py-2 border font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-3 text-gray-500">
                  No students found
                </td>
              </tr>
            ) : (
              filtered.map((student) => (
                <tr key={student.id} className="bg-white text-center">
                  <td className="px-4 py-2 border border-gray-300 font-medium">
                    {editId === student.id ? (
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      student.name
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {editId === student.id ? (
                      <input
                        type="text"
                        value={editClass}
                        onChange={(e) => setEditClass(e.target.value)}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      student.class
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-center flex justify-center gap-2">
                    {editId === student.id ? (
                      <>
                        <button
                          onClick={() => handleSave(student.id)}
                          className="px-2 py-1 bg-green-600 text-white rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditId(null)}
                          className="px-2 py-1 bg-gray-500 text-white rounded"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(student)}
                          className="px-2 py-1 bg-yellow-500 text-white rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteStudent(student.id)}
                          className="px-2 py-1  text-white rounded"
                        >
                          <img src={dlt} className="w-5 inline" alt="delete" />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
