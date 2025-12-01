import React from "react";
import "./TopBar.css";
import { FaTwitch, FaYoutube, FaKickstarterK } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="topbar">

      {/* BOTÃO 1 */}
      <div className="topbar-box">
        <h3>SIGA & SEJA SEGUIDO</h3>
        <span className="sub">SEM NOVOS CANAIS</span>
      </div>

      {/* BOTÃO 2 */}
      <div className="topbar-box">
        <h3>CONECTAR CANAIS</h3>
        <div className="icons">
          <FaTwitch className="icon twitch" />
          <FaKickstarterK className="icon kick" />
          <FaYoutube className="icon yt" />
        </div>
      </div>

      {/* BOTÃO 3 */}
      <div className="topbar-box">
        <h3>VERIFICAR ATUALIZAÇÕES</h3>
        <span className="sub update">ATUALIZAÇÃO VERSÃO 2.0</span>
      </div>

      {/* TUTORIAL */}
      <button className="topbar-btn tutorial">TUTORIAL</button>

      {/* AJUDA */}
      <button className="topbar-btn help">AJUDA</button>

    </div>
  );
}
