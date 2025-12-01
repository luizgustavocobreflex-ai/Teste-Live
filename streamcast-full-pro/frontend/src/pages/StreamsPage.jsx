import React, { useState } from "react";
import Layout from "../components/Layout";
import StreamCard from "../components/StreamCard";
import "./StreamsPage.css";

export default function StreamsPage() {
  const [streams, setStreams] = useState([
    {
      id: 1,
      title: "Podcast ao vivo",
      description: "Bate-papo semanal sobre tecnologia",
      status: "offline",
    },
    {
      id: 2,
      title: "Aula React",
      description: "Live de programação front-end",
      status: "online",
    },
  ]);

  const toggleStatus = (id) => {
    setStreams((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "online" ? "offline" : "online" }
          : s
      )
    );
  };

  return (
    <Layout title="Meus Streams">
      <div className="streams-list">
        {streams.map((stream) => (
          <StreamCard
            key={stream.id}
            stream={stream}
            toggleStatus={toggleStatus}
          />
        ))}
      </div>
    </Layout>
  );
}
