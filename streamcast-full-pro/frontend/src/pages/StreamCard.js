import React from "react";
import "./StreamCard.css";

export default function StreamCard({ stream, toggleStatus }) {
  return (
    <div className="stream-card">
      <h3>{stream.title}</h3>
      <p>{stream.description}</p>

      <span
        className={
          stream.status === "online" ? "status-online" : "status-offline"
        }
      >
        {stream.status.toUpperCase()}
      </span>

      <button onClick={() => toggleStatus(stream.id)}>
        {stream.status === "online" ? "Finalizar Stream" : "Iniciar Stream"}
      </button>
    </div>
  );
}
