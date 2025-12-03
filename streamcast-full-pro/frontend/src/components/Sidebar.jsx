import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">

      {/* LOGO DO SISTEMA */}
      <div className="sidebar-logo">
        <img
          src="/assets/icons/painel-status/StreamcastLogo.png"
          alt="Logo StreamCast"
          className="logo-img"
        />
      </div>

      {/* LIVE STATUS */}
<div className="status-header">

  <div className="live-row">
    <img
      src="/assets/icons/painel-status/Live Status.png"
      alt="Live Status"
      className="status-icon-text"
    />

    <img
      src="/assets/icons/painel-status/Button On02black.png"
      alt="ON"
      className="status-toggle"
    />
  </div>

  <div className="status-user">RoninGamingBR</div>

</div>

      {/* PONTOS DE LURK */}
      <div className="status-row">
        <img src="/assets/icons/painel-status/Estrela.png" className="status-ico" />
        <div className="row-title">PONTOS DE LURK</div>
        <div className="row-value">8000</div>
        <img src="/assets/icons/painel-status/Check.png" className="status-check" />
      </div>

      {/* PASSE VIP */}
      <div className="status-row">
        <img src="/assets/icons/painel-status/VIP.png" className="status-ico vip-icon" />
        <div className="row-title">PASSE VIP</div>
        <div className="row-value">20</div>
        <img src="/assets/icons/painel-status/Check.png" className="status-check" />
      </div>

      {/* TICKETS/FOLLOWS */}
      <div className="status-row">
        <img src="/assets/icons/painel-status/Follow Heart.png" className="status-ico" />
        <div className="row-title">TICKETS/FOLLOWS</div>
        <div className="row-value">10</div>
        <img src="/assets/icons/painel-status/Check.png" className="status-check" />
      </div>

      {/* RANKING */}
      <div className="status-row">
        <img src="/assets/icons/painel-status/Ranking.png" className="status-ico" />
        <div className="row-title">RANKING</div>
        <div className="row-value gold">OURO</div>
        <img
          src="/assets/icons/painel-status/3- Gold Badges.png"
          className="rank-badge"
        />
      </div>

      {/* META DE LURK */}
      <div className="status-row">
        <img src="/assets/icons/painel-status/Metal Verificado.png" className="status-ico" />
        <div className="row-title">META DE LURK</div>
        <div className="row-value">8000</div>
        <img src="/assets/icons/painel-status/Check.png" className="status-check" />
        
      </div>
    </div>
  );
}
