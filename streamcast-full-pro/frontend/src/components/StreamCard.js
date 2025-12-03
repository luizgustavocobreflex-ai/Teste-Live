import React, { useState } from "react";
import Layout from "../components/Layout";
import StreamCard from "../components/StreamCard"; // <-- AGORA ESTÁ CERTO!

export default function StreamsPage() {
  const [streams] = useState([
    {
      id: 1,
      title: "Live de teste",
      platform: "Twitch",
      channelId: "canal_exemplo",
      live: true,
    },
    {
      id: 2,
      title: "Gameplay aleatório",
      platform: "YouTube",
      channelId: "yt_channel",
      live: false,
    },
  ]);

  return (
    <Layout title="Streams">
      <div style={{ padding: "20px" }}>
        <h2 style={{ color: "#fff", marginBottom: 20 }}>Streams conectadas</h2>

        {streams.map((stream) => (
          <StreamCard key={stream.id} stream={stream} />
        ))}
      </div>
    </Layout>
  );
}
