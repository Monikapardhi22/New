import React, { useState,useEffect } from "react";

export default function Parents({ parents, setParents, setActiveTab, editParent, setEditParent  }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    if (editParent) {
      setName(editParent.name);
      setPhone(editParent.phone);
      setEmail(editParent.email);
    }
  }, [editParent]);
 
  // const addParent = () => {
  //   if (!name || !phone || !email) return alert("Fill all fields");
  //   const newParent = { id: Date.now(), name, phone, email };
  //   setParents([...parents, newParent]);
  //   setName(""); 
  //   setPhone(""); 
  //   setEmail("");
  //   setActiveTab("parentList"); // ✅ Add ke baad Parent List pe redirect
  // };
  const addParent = () => {
    if (!name || !phone || !email) return alert("Fill all fields");

    if (editParent) {
      // update parent
      setParents(
        parents.map((p) =>
          p.id === editParent.id ? { ...p, name, phone, email } : p
        )
      );
      setEditParent(null); // reset edit mode
    } else {
      // new parent
      const newParent = { id: Date.now(), name, phone, email };
      setParents([...parents, newParent]);
    }

    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="mt-4 text-[17px] shadow-lg rounded-3xl pl-14 p-4 pr-14 bg-white">
      <h3 className="font-semibold mt-4 text-[22px] ">Add Parent </h3>
      
      Name - 
      <input 
        value={name} 
        className="border-[1px] mb-4 mt-4 ml-1.5 border-black rounded-md px-1 w-[250px] py-1" 
        onChange={e => setName(e.target.value)} 
        placeholder="Name of Parent" 
      />
      <br/>

      Phone -
      <input 
        value={phone} 
        className="border-[1px] mb-4 mt-4 ml-1.5 border-black w-[250px] rounded-md px-1 py-1" 
        onChange={e => setPhone(e.target.value)} 
        placeholder="Phone no. Parent" 
      />
      <br/>

      Email - 
      <input 
        value={email} 
        className="border-[1px] mb-4 mt-4 ml-1.5 border-black w-[250px] rounded-md px-1 py-1" 
        onChange={e => setEmail(e.target.value)} 
        placeholder="Email address Parent" 
      />
      <br/>

      <div className="text-center">
        <button 
          onClick={addParent} 
          className="bg-blue-700 focus:bg-blue-800 mt-4 w-[100px] text-white rounded-lg p-1"
        >
          Add
        </button>
        <button 
          onClick={() => setActiveTab("parentList")} 
          className="bg-gray-500 ml-3 mt-4 w-[100px] text-white rounded-lg p-1"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
