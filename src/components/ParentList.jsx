import React, { useState } from "react";
import dlt from "../assets/delete.png";

export default function ParentList({ parents, students, setParents, setStudents }) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");
  
  // Student edit state
  const [studentEditId, setStudentEditId] = useState(null);
  const [studentEditName, setStudentEditName] = useState("");
  const [studentEditClass, setStudentEditClass] = useState("");

  const deleteParent = (id) => {
    if (window.confirm("Delete parent?")) {
      setParents(parents.filter((p) => p.id !== id));
      setStudents(students.filter((s) => s.parentId !== String(id)));
    }
  };

  const deleteStudent = (id) => {
    if (window.confirm("Delete student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const handleEditParent = (parent) => {
    setEditId(parent.id);
    setEditName(parent.name);
    setEditEmail(parent.email);
    setEditPhone(parent.phone);
  };

  const handleSaveParent = (id) => {
    setParents(
      parents.map((p) =>
        p.id === id ? { ...p, name: editName, email: editEmail, phone: editPhone } : p
      )
    );
    setEditId(null);
  };

  const handleEditStudent = (student) => {
    setStudentEditId(student.id);
    setStudentEditName(student.name);
    setStudentEditClass(student.class);
  };

  const handleSaveStudent = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, name: studentEditName, class: studentEditClass } : s
      )
    );
    setStudentEditId(null);
  };

  return (
    <div className="lg:w-[1000px]">
      <h3 className="text-xl font-bold mb-4 mt-4 lg:text-center">Parents List</h3>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-400 rounded-lg">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-400">Name</th>
              <th className="px-4 py-2 border border-gray-400">Email</th>
              <th className="px-4 py-2 border border-gray-400">Phone</th>
              <th className="px-4 py-2 border border-gray-400">Students</th>
              <th className="px-4 py-2 border border-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parents.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-3 text-gray-500 border border-gray-300">
                  No parents found
                </td>
              </tr>
            ) : (
              parents.map((parent) => (
                <tr key={parent.id} className="bg-white text-center">
                  <td className="px-4 py-2 border border-gray-300 font-medium">
                    {editId === parent.id ? (
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      parent.name
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {editId === parent.id ? (
                      <input
                        type="email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      parent.email
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {editId === parent.id ? (
                      <input
                        type="text"
                        value={editPhone}
                        onChange={(e) => setEditPhone(e.target.value)}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      parent.phone
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {students.filter((s) => s.parentId === String(parent.id)).length === 0 ? (
                      <p className="text-gray-500 italic">No students</p>
                    ) : (
                      <table className="w-full border border-gray-300 text-sm border-collapse mt-2">
                        <thead className="bg-blue-800 text-white">
                          <tr>
                            <th className="px-2 py-1 border border-gray-300">Name</th>
                            <th className="px-2 py-1 border border-gray-300">Class</th>
                            <th className="px-2 py-1 border border-gray-300">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {students
                            .filter((s) => s.parentId === String(parent.id))
                            .map((s) => (
                              <tr key={s.id}>
                                <td className="px-2 py-1 border border-gray-300">
                                  {studentEditId === s.id ? (
                                    <input
                                      type="text"
                                      value={studentEditName}
                                      onChange={(e) => setStudentEditName(e.target.value)}
                                      className="border p-1 rounded w-full"
                                    />
                                  ) : (
                                    s.name
                                  )}
                                </td>
                                <td className="px-2 py-1 border border-gray-300">
                                  {studentEditId === s.id ? (
                                    <input
                                      type="text"
                                      value={studentEditClass}
                                      onChange={(e) => setStudentEditClass(e.target.value)}
                                      className="border p-1 rounded w-full"
                                    />
                                  ) : (
                                    s.class
                                  )}
                                </td>
                                <td className="px-2 py-1 border border-gray-300 text-center">
                                  {studentEditId === s.id ? (
                                    <>
                                      <button
                                        onClick={() => handleSaveStudent(s.id)}
                                        className="px-2 py-1 bg-green-500 text-white rounded mr-2 mb-1"
                                      >
                                        Save
                                      </button>
                                      <button
                                        onClick={() => setStudentEditId(null)}
                                        className="px-2 py-1 bg-gray-500 text-white rounded"
                                      >
                                        Cancel
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <button
                                        onClick={() => handleEditStudent(s)}
                                        className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                                      >
                                        Edit
                                      </button>
                                      <button onClick={() => deleteStudent(s.id)}>
                                        <img src={dlt} className="w-6 inline" alt="delete" />
                                      </button>
                                    </>
                                  )}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-center">
                    {editId === parent.id ? (
                      <>
                        <button
                          onClick={() => handleSaveParent(parent.id)}
                          className="px-2 py-1 bg-green-500 text-white rounded mr-2 mb-2"
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
                          onClick={() => handleEditParent(parent)}
                          className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                        >
                          Edit
                        </button>
                        <button onClick={() => deleteParent(parent.id)}>
                          <img src={dlt} className="w-6 inline" alt="delete" />
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
