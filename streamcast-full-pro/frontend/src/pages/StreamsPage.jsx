import React, { useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import StreamCard from "../components/StreamCard";
import CreateStreamModal from "../components/CreateStreamModal";
import EditStreamModal from "../components/EditStreamModal";
import "./StreamsPage.css";

export default function StreamsPage() {
  const { streams } = useAuth();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editStream, setEditStream] = useState(null);

  return (
    <Layout title="Gerenciar Streams">
      <div className="streams-header">
        <h2>Minhas Streams</h2>
        <button className="add-stream-btn" onClick={() => setShowCreateModal(true)}>
          + Nova Stream
        </button>
      </div>

      <div className="streams-list">
        {streams.length === 0 && <p className="empty">Nenhuma stream criada ainda.</p>}

        {streams.map((stream) => (
          <StreamCard
            key={stream.id}
            stream={stream}
            onEdit={() => setEditStream(stream)}
          />
        ))}
      </div>

      {/* Modal de criar */}
      {showCreateModal && (
        <CreateStreamModal onClose={() => setShowCreateModal(false)} />
      )}

      {/* Modal de editar */}
      {editStream && (
        <EditStreamModal
          stream={editStream}
          onClose={() => setEditStream(null)}
        />
      )}
    </Layout>
  );
}
