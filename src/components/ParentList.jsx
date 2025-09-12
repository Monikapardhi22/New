import React from "react";
import dlt from "../assets/delete.png"

export default function ParentList({ parents, students, setParents, setStudents }) {
  const deleteParent = (id) => {
    if (window.confirm("Delete parent?")) {
      setParents(parents.filter((p) => p.id !== id));
    }
  };

  const deleteStudent = (id) => {
    if (window.confirm("Delete student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">📋 Parents List</h3>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 rounded-lg">
          <thead className="bg-blue-400 text-white">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Students</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parents.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-3 text-gray-500">
                  No parents found
                </td>
              </tr>
            ) : (
              parents.map((parent) => (
                <tr key={parent.id} className="bg-white align-top text-center mt-2.5">
                  <td className="px-4 py-2 border border-gray-300  font-medium">{parent.name}</td>
                  <td className="px-4 py-2 border border-gray-300 ">{parent.email}</td>
                  <td className="px-4 py-2 border border-gray-300 ">{parent.phone}</td>
                  <td className="px-4 py-2 border border-gray-300 ">
                    {students.filter((s) => s.parentId === String(parent.id)).length === 0 ? (
                      <p className="text-gray-500 italic">No students</p>
                    ) : (
                      <table className="w-full border border-gray-200 text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-2 py-1 border">Name</th>
                            <th className="px-2 py-1 border">Class</th>
                            <th className="px-2 py-1 border">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {students
                            .filter((s) => s.parentId === String(parent.id))
                            .map((s) => (
                              <tr key={s.id}>
                                <td className="px-2 py-1 border">{s.name}</td>
                                <td className="px-2 py-1 border">{s.class}</td>
                                <td className="px-2 py-1 border text-center">
                                  <button
                                    onClick={() => deleteStudent(s.id)}
                                    className=" text-white px-2 py-1 rounded text-xs"
                                  >
                                    {/* Del */}
                                    <img src={dlt} className="w-8"/>
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-center">
                    <button
                      onClick={() => deleteParent(parent.id)}
                      className="    text-white px-3 py-1 rounded-md text-sm"
                    >
                      {/* Delete Parent */}
                       <img src={dlt} className="w-8"/>
                    </button>
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
