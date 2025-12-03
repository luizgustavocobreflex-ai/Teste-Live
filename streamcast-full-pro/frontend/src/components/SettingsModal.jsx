import React from "react";
import { useAuth } from "../context/AuthContext";
import "./UserModals.css";

export default function SettingsModal({ onClose }) {
  const { settings, updateSettings } = useAuth();

  const handleThemeChange = (e) => {
    updateSettings({ theme: e.target.value });
  };

  const handleLanguageChange = (e) => {
    updateSettings({ language: e.target.value });
  };

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <h2>Configurações</h2>

        <div className="settings-group">
          <label>Tema</label>
          <select value={settings.theme} onChange={handleThemeChange}>
            <option value="dark">Escuro</option>
            <option value="light">Claro</option>
          </select>
        </div>

        <div className="settings-group">
          <label>Idioma</label>
          <select value={settings.language} onChange={handleLanguageChange}>
            <option value="pt">Português</option>
            <option value="en">Inglês</option>
          </select>
        </div>

        <button className="modal-btn" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}
