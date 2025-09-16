import React from "react";
import dlt from "../assets/delete.png"

export default function StudentList({ students, setStudents, search }) {
  const deleteStudent = (id) => {
    if (window.confirm("Delete student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  // Search filter for student 
  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.class.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 mt-3.5 lg:text-center text-center"> Students List</h3>

      <div className="overflow-x-auto">
        <table className="table-auto w-full  border border-gray-300 rounded-lg">
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
                <td
                  colSpan="3"
                  className="text-center py-3 text-gray-500"
                >
                  No students found
                </td>
              </tr>
            ) : (
              filtered.map((student) => (
                <tr key={student.id} className="bg-white text-center ">
                  <td className="px-4 py-2 border border-gray-300  font-medium">
                    {student.name}
                  </td>
                  <td className="px-4 py-2 border-gray-300  border">{student.class}</td>
                  <td className="px-4 py-2 border-gray-300  border text-center">
                    <button
                      onClick={() => deleteStudent(student.id)}
                      className=" text-white px-3 py-1 rounded-md text-sm"
                    >
                      {/* Delet */}
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
