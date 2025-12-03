import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import "./UserModals.css";

export default function ProfileModal({ onClose }) {
  const { user } = useAuth();

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <h2>Perfil</h2>

        <FaUserCircle className="profile-avatar" />

        <p className="profile-name">
          {user?.username || "Visitante"}
        </p>

        <p className="profile-info">
          Aqui você poderá futuramente gerenciar seus dados de conta.
        </p>

        <button className="modal-btn" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}
