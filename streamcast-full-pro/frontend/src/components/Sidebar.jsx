import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const topLurkers = [
    "dosnove",
    "AdnMemory",
    "yamato_vitoriano",
    "playerferraz",
    "roningamingbr",
    "thelorldheg",
    "rosaninha_fenix",
  ];

  const activeLurkers = [
    "Ronin_ghost07",
    "ocegovelho",
    "jogandocerto",
    "CafofoGameplay",
    "mbo71",
    "near_nee",
    "rodrigo_garou",
    "mundodemilu",
    "dosnove",
    "AdnMemory",
    "yamato_vitoriano",
    "playerferraz",
    "roningamingbr",
    "thelorldheg",
    "rosaninha_fenix",
  ];

  return (
    <div className="sidebar">
      {/* LOGO */}
      <div className="sidebar-logo">
        <img src="/logo192.png" alt="Logo" />
        <h2>StreamCast<br/>Network</h2>
      </div>

      {/* LIVE STATUS */}
      <div className="sidebar-section live">
        <h3>LIVE STATUS</h3>
        <div className="live-indicator">
          <span className="dot"></span> ON
        </div>
        <p className="username">RoninGamingBR</p>
      </div>

      {/* INFO BLOCKS */}
      <div className="info-block">
        <span className="label">PONTOS DE LURK</span>
        <span className="value">8000</span>
      </div>

      <div className="info-block">
        <span className="label">PASSE VIP</span>
        <span className="value green">20 ✓</span>
      </div>

      <div className="info-block">
        <span className="label">TICKETS/FOLLOWS</span>
        <span className="value green">10 ✓</span>
      </div>

      <div className="info-block">
        <span className="label">RANKING</span>
        <span className="value gold">OURO ★</span>
      </div>

      <div className="info-block">
        <span className="label">META DE LURK</span>
        <span className="value">8000</span>
      </div>

      {/* TOP 7 */}
      <div className="sidebar-section">
        <h3>TOP 7 LURKERS DO MÊS</h3>
        <ol className="lurkers-list">
          {topLurkers.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ol>
      </div>

      {/* LURKERS ATIVOS */}
      <div className="sidebar-section">
        <h3>LURKERS ATIVOS: {activeLurkers.length}</h3>
        <ul className="active-list">
          {activeLurkers.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
