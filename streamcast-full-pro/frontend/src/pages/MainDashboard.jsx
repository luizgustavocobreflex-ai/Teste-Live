import React from "react";
import Layout from "../components/Layout";
import "./MainDashboard.css";

export default function MainDashboard() {
  return (
    <Layout title="Dashboard Geral">
      <div className="dashboard-container">

        {/* ===================== SUPERIOR ===================== */}
        <div className="top-status-row">
          
          <div className="status-left">
            <h2 className="username">RoninGamingBR</h2>

            <div className="status-box">
              <span className="label">PONTOS DE LURK</span>
              <span className="value">8000</span>
            </div>

            <div className="status-box">
              <span className="label">PASSE VIP</span>
              <span className="value green">20 ✔</span>
            </div>

            <div className="status-box">
              <span className="label">TICKETS/FOLLOWS</span>
              <span className="value green">10 ✔</span>
            </div>

            <div className="status-box">
              <span className="label">RANKING</span>
              <span className="value gold">OURO 🥇</span>
            </div>

            <div className="status-box">
              <span className="label">META DE LURK</span>
              <span className="value">8000</span>
            </div>
          </div>

          {/* Botões do topo */}
        </div>

        {/* ===================== DESTAQUES ===================== */}
        <div className="top-row">

          {/* Destaque comum */}
          <div className="highlight-box">
            <div className="box-header">
              <h3>PONTOS: 10</h3>
              <span className="timer">TEMPO: 15:00</span>
            </div>

            <div className="highlight-content">
              <div className="fake-video">STREAM DO USUÁRIO</div>
              <div className="chat-box">CHAT DO USUÁRIO</div>
            </div>

            <p className="box-info">
              Para aparecer no destaque é necessário atingir a meta de lurk
            </p>
          </div>

          {/* Destaque VIP */}
          <div className="highlight-box vip">
            <div className="box-header">
              <h3>PASSE VIP</h3>
              <span className="timer">TEMPO: 60:00</span>
            </div>

            <div className="highlight-content">
              <div className="fake-video">STREAM VIP</div>
              <div className="chat-box">CHAT VIP</div>
            </div>

            <p className="box-info">
              O primeiro a ativar o botão após 60 minutos ocupa o destaque VIP
            </p>
          </div>

        </div>

        {/* ===================== FILAS ===================== */}
        <div className="queue-section">
          <div className="queue-container">
            <h3>FILA 35</h3>
            <div className="queue-users">
              {[...Array(10)].map((_, i) => (
                <div className="queue-avatar" key={i}>IMG</div>
              ))}
            </div>
          </div>

          <div className="queue-container">
            <h3>FILA 18</h3>
            <div className="queue-users">
              {[...Array(10)].map((_, i) => (
                <div className="queue-avatar" key={i}>IMG</div>
              ))}
            </div>
          </div>
        </div>

        {/* ===================== RANKING & VANTAGENS ===================== */}
        <div className="ranking-container">
          <h3>RANKING & VANTAGENS</h3>
          <div className="ranking-grid">
            <div className="rank-card">NÍVEL BRONZE — 100 LURKS</div>
            <div className="rank-card">NÍVEL PRATA — 200 LURKS</div>
            <div className="rank-card">NÍVEL OURO — 300 LURKS + 1 PASSE VIP</div>
            <div className="rank-card">NÍVEL PLATINA — 400 LURKS</div>
            <div className="rank-card">NÍVEL PALÁDIO — 500 LURKS</div>
          </div>
        </div>

        {/* ===================== NOTIFICAÇÕES ===================== */}
        <div className="notifications-container">
          <h3>NOTIFICAÇÕES</h3>
          <p>
            Todas as notificações, atualizações e detalhes estarão no Discord.
          </p>
          <button className="discord-btn">ABRIR</button>
        </div>

        {/* ===================== STORE ===================== */}
        <div className="store-container">
          <h3>STORE</h3>
          <p>Obtenha passes VIP na lojinha (moeda real)</p>
          <button className="store-btn">ABRIR</button>
        </div>

        {/* ===================== CONFIGURAÇÕES ===================== */}
        <div className="system-config">
          <h3>CONFIGS DO SISTEMA</h3>
          <ul>
            <li>Passe VIP: limite diário 20</li>
            <li>Uso de pontos por live: 10</li>
            <li>Débito semanal: 400</li>
            <li>Permanência em follows: 1</li>
            <li>Reset do ranking: mensal</li>
          </ul>
        </div>

      </div>
    </Layout>
  );
}
