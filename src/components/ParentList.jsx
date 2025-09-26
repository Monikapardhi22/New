import React, { useState } from "react";
import dlt from "../assets/delete.png";

export default function ParentList({ parents,setEditParent,setActiveTab, setParents, students, setStudents }) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");

  // new parent fields
  // const [newName, setNewName] = useState("");
  // const [newEmail, setNewEmail] = useState("");
  // const [newPhone, setNewPhone] = useState("");

  // delete parent + its students
  const deleteParent = (id) => {
    if (window.confirm("Delete parent?")) {
      setParents(parents.filter((p) => p.id !== id));
      setStudents(students.filter((s) => s.parentId !== String(id)));
    }
  };

  // const handleEdit = (parent) => {
  //   setEditId(parent.id);
  //   setEditName(parent.name);
  //   setEditEmail(parent.email);
  //   setEditPhone(parent.phone);
  // };

  const handleSave = (id) => {
    setParents(
      parents.map((p) =>
        p.id === id ? { ...p, name: editName, email: editEmail, phone: editPhone } : p
      )
    );
    setEditId(null);
  };

  // const handleAddParent = () => {
    // if (!newName || !newEmail || !newPhone) {
      // alert("Please fill all fields before adding parent.");
      // return;
    // }
  //   setParents([
  //     ...parents,
  //     { id: Date.now(), name: newName, email: newEmail, phone: newPhone },
  //   ]);
  //   setNewName("");
  //   setNewEmail("");
  //   setNewPhone("");
  // };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 mt-3.5 text-center">Parents List</h3>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 rounded-lg">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-4 py-2 border font-medium">Name</th>
              <th className="px-4 py-2 border font-medium">Email</th>
              <th className="px-4 py-2 border font-medium">Phone</th>
              <th className="px-4 py-2 border font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* ADD PARENT ROW */}
            <tr className="bg-white text-center">
              {/* <td className="px-4 py-2 border border-gray-300">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Enter name"
                  className="border-0 outline-0 p-1 rounded w-full"
                />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Enter email"
                  className="border-0 outline-0 p-1 rounded w-full"
                />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input
                  type="text"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="Enter phone"
                  className="border-0 outline-0 p-1 rounded w-full"
                />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <button
                  onClick={handleAddParent}
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Add Parent
                </button>
              </td> */}
<td colSpan="4" className="text-center py-3 text-gray-500">
              <div className="text-center mb-4 mt-4 mx-2.5 ">
    <button 
      onClick={() => setActiveTab("parents")} 
      className="px-11 py-2 bg-blue-700 text-white rounded "
    >
       Add Parent
    </button>
  </div>
  </td>
            </tr>

            {/* EXISTING PARENTS */}
            {parents.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-3 text-gray-500">
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
                  <td className="px-4 py-2 border border-gray-300 text-center flex justify-center gap-2">
                    {editId === parent.id ? (
                      <>
                        <button
                          onClick={() => handleSave(parent.id)}
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
                          // onClick={() => handleEdit(parent)}
                          onClick={()=>{
                            setEditParent(parent);           // 👈 selected parent bhejo
    setActiveTab("parents"); 
                          }}
                          className="px-2 py-1 bg-yellow-500 text-white rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteParent(parent.id)}
                          className="px-2 py-1 text-white rounded"
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
