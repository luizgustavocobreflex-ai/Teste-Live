import React from "react";
import "./TopBar.css";
import { FaUserCircle } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="topbar">

      {/* SIGA E SEJA SEGUIDO */}
      <div className="tb-box">
        <img
          src="/assets/icons/painel-status/topbar/Sigaesejaseguido.png"
          alt="Siga e Seja Seguido"
          className="tb-title-img"
        />
        <div className="tb-row">
          <img src="/assets/icons/painel-status/topbar/SemNovosCanais.png" alt="" className="tb-small-btn"/>
          <img src="/assets/icons/painel-status/topbar/AguardarButton.png" alt="" className="tb-small-btn"/>
        </div>
      </div>

      <img src="/assets/icons/painel-status/topbar/DiamanteDourado.png" className="tb-sep" alt="sep" />

      {/* CONECTAR CANAIS */}
      <div className="tb-box">
        <span className="tb-label">CONECTAR CANAIS</span>
        <div className="tb-row">
          <img src="/assets/icons/painel-status/topbar/TwitchNeonLogo.png" className="tb-mini" alt="Twitch" />
          <img src="/assets/icons/painel-status/topbar/KickMiniLogo.png" className="tb-mini" alt="Kick" />
          <img src="/assets/icons/painel-status/topbar/YouTubeMiniLogo.png" className="tb-mini" alt="YouTube" />
        </div>
      </div>

      <img src="/assets/icons/painel-status/topbar/DiamanteDourado.png" className="tb-sep" alt="sep" />

      {/* ATUALIZAÇÕES */}
      <div className="tb-box">
        <span className="tb-label">VERIFICAR ATUALIZAÇÕES</span>
        <div className="tb-row">
          <img src="/assets/icons/painel-status/topbar/AtualizacaoVersao.png" className="tb-small-btn" alt="Atualização" />
          <img src="/assets/icons/painel-status/topbar/Download.png" className="tb-mini" alt="Download" />
        </div>
      </div>

      <img src="/assets/icons/painel-status/topbar/DiamanteDourado.png" className="tb-sep" alt="sep" />

      {/* TUTORIAL */}
      <div className="tb-box">
        <img src="/assets/icons/painel-status/topbar/TutorialVermelho.png" className="tb-big-btn" alt="Tutorial" />
      </div>

      <img src="/assets/icons/painel-status/topbar/DiamanteDourado.png" className="tb-sep" alt="sep" />

      {/* AJUDA */}
      <div className="tb-box">
        <img src="/assets/icons/painel-status/topbar/AjudaAmarelo.png" className="tb-big-btn" alt="Ajuda" />
      </div>

      <img src="/assets/icons/painel-status/topbar/DiamanteDourado.png" className="tb-sep" alt="sep" />

      {/* USUÁRIO */}
      <div className="tb-user-area">
        <FaUserCircle className="tb-user" />
      </div>

    </div>
  );
}
