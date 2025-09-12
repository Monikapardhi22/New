import React, { useState } from "react";
import AdminPanel from "./pages/AdminPanel"
import Home from "./pages/Home"


export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="">
      {!showAdmin ? (
        <Home onOpenAdmin={() => setShowAdmin(true)} />
      ) : (
        <AdminPanel onCloseAdmin={() => setShowAdmin(false)} />
      )}
    </div>
  );
}
