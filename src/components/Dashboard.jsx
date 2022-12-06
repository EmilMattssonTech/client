import React from "react";
import { Routes, Route } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/library" element={<h1>Library</h1>} />
        <Route path="/playlist/:id" element={<h1>Playlist</h1>} />
      </Routes>
    </div>
  );
}
