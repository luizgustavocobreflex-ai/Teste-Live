import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./LoginModal.css";

export default function LoginModal({ onClose }) {
  const { login } = useAuth();  // ← AQUI É O CERTO

  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim()) return;

    login(username);
    onClose();
  }

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <h2>Entrar</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button className="modal-btn" type="submit">
            Acessar
          </button>

          <button className="modal-close" type="button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
