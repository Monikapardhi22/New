import React from "react";
import dlt from "../assets/delete.png";

export default function ParentList({ parents, students, setParents, setStudents}) {
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

  // const filtered = students.filter(
  //   (s) =>
  //     s.name.toLowerCase().includes(search.toLowerCase()) ||
  //     s.class.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="lg:w-[1000px]">
      <h3 className="text-xl font-bold mb-4 mt-4 lg:text-center"> Parents List</h3>

      <div className="overflow-x-auto">
        <table className="w-full  border border-gray-400 rounded-lg ">
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
                  <td className="px-4 py-2 border border-gray-300 font-medium">{parent.name}</td>
                  <td className="px-4 py-2 border border-gray-300">{parent.email}</td>
                  <td className="px-4 py-2 border border-gray-300">{parent.phone}</td>
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
                                <td className="px-2 py-1 border border-gray-300">{s.name}</td>
                                <td className="px-2 py-1 border border-gray-300">{s.class}</td>
                                <td className="px-2 py-1 border border-gray-300 text-center">
                                  <button onClick={() => deleteStudent(s.id)}>
                                    <img src={dlt} className="w-6" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-center">
                    <button onClick={() => deleteParent(parent.id)}>
                      <img src={dlt} className="w-6" />
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
