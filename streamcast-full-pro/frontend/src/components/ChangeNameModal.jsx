import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./UserModals.css";

export default function ChangeNameModal({ onClose }) {
  const { user, updateName } = useAuth();
  const [newName, setNewName] = useState(user?.username || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    updateName(newName.trim());
    onClose();
  };

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <h2>Alterar nome</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newName}
            placeholder="Novo nome de usuário"
            onChange={(e) => setNewName(e.target.value)}
          />

          <button className="modal-btn" type="submit">
            Salvar
          </button>

          <button className="modal-close" type="button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
