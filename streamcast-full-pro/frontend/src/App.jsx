import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import MainDashboard from "./pages/MainDashboard";
import StreamsPage from "./pages/StreamsPage";
import ShopPage from "./pages/ShopPage";
import AdminPage from "./pages/AdminPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial (login) */}
        <Route path="/" element={<Login />} />

        {/* Dashboard principal */}
        <Route path="/dashboard" element={<MainDashboard />} />

        {/* Outras páginas */}
        <Route path="/streams" element={<StreamsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}
