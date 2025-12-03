import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Modal.css";

export default function CreateStreamModal({ onClose }) {
  const { addStream } = useAuth();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    addStream({
      title,
      description: desc
    });

    onClose();
  }

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <h2>Nova Stream</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título da stream"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Descrição"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <button className="modal-btn" type="submit">
            Criar
          </button>

          <button className="modal-close" type="button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
