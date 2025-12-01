import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TopBar from "./TopBar";
import "./Layout.css";

export default function Layout({ title, children }) {
  return (
    <div className="layout-wrapper">
      
      <Sidebar />

      <div className="layout-main">

        {/* Header azul */}
        <div className="header-wrapper">
          <Header title={title} />
        </div>

        {/* TopBar com botões */}
        <div className="topbar-wrapper">
          <TopBar />
        </div>

        {/* Conteúdo do dashboard */}
        <div className="layout-content">
          {children}
        </div>

      </div>
    </div>
  );
}
