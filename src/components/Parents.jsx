import React, { useState } from "react";

export default function Parents({ parents, setParents }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const addParent = () => {
    if (!name || !phone || !email) return alert("Fill all fields");
    const newParent = { id: Date.now(), name, phone, email };
    setParents([...parents, newParent]);
    setName(""); setPhone(""); setEmail("");
  };

  return (
    <div className="mt-4 text-[17px]">
      <h3 className="font-bold mt-4 text-[19px]">Add Parent</h3>
      Name : <input value={name} className="border-[1px] m-4 border-black rounded-lg px-1 py-1" onChange={e => setName(e.target.value)} placeholder="Name" />
      <br/>
      Phone :<input value={phone} className="border-[1px] m-4 border-black rounded-lg px-1 py-1" onChange={e => setPhone(e.target.value)} placeholder="Phone" />
      <br/>
      Email : <input value={email} className="border-[1px] m-4 border-black rounded-lg px-1 py-1" onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <br/>
      <button onClick={addParent} className="bg-green-300 mt-4 w-[60px] text-black rounded-lg p-1">Add</button>
    </div>
  );
}
