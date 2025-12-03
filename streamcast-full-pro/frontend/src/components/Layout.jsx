import React, { useState } from "react";
import Sidebar from "./Sidebar";
import LoginModal from "./LoginModal";
import TopBar from "./TopBar";
import "./Layout.css";

export default function Layout({ title, children }) {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="layout-wrapper">
      {/* SIDEBAR à esquerda */}
      <Sidebar />

      {/* CONTEÚDO PRINCIPAL */}
      <div className="layout-main">

        {/* TOPBAR profissional */}
        <TopBar onLoginClick={() => setOpenLogin(true)} />

        {/* MODAL DE LOGIN */}
        {openLogin && <LoginModal onClose={() => setOpenLogin(false)} />}

        {/* CONTEÚDO DAS PÁGINAS */}
        <div className="layout-content">
          {children}
        </div>

      </div>
    </div>
  );
}
