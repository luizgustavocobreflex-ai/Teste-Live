import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Modal.css";

export default function EditStreamModal({ stream, onClose }) {
  const { editStream } = useAuth();

  const [title, setTitle] = useState(stream.title);
  const [desc, setDesc] = useState(stream.description);

  function handleSubmit(e) {
    e.preventDefault();

    editStream(stream.id, {
      title,
      description: desc
    });

    onClose();
  }

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <h2>Editar Stream</h2>

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
