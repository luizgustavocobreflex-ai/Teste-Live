import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Configurações gerais
  const [settings, setSettings] = useState({
    theme: "dark",
    language: "pt",
  });

  // STREAMS: estado global
  const [streams, setStreams] = useState([]);

  // -------------------------------
  // CARREGAR LOCALSTORAGE NA ENTRADA
  // -------------------------------
  useEffect(() => {
    const savedUser = localStorage.getItem("streamcast_user");
    const savedSettings = localStorage.getItem("streamcast_settings");
    const savedStreams = localStorage.getItem("streamcast_streams");

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedSettings) setSettings(JSON.parse(savedSettings));
    if (savedStreams) setStreams(JSON.parse(savedStreams));
  }, []);

  // -------------------------------
  // SALVAR LOCALSTORAGE AUTOMÁTICO
  // -------------------------------
  useEffect(() => {
    if (user) localStorage.setItem("streamcast_user", JSON.stringify(user));
    else localStorage.removeItem("streamcast_user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("streamcast_settings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem("streamcast_streams", JSON.stringify(streams));
  }, [streams]);

  // -------------------------------
  // FUNÇÕES DE AUTENTICAÇÃO
  // -------------------------------
  function login(username) {
    const newUser = { username };
    setUser(newUser);
  }

  function logout() {
    setUser(null);
  }

  function updateName(newName) {
    if (!user) return;
    setUser({ ...user, username: newName });
  }

  function updateSettings(newSettings) {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  }

  // -------------------------------
  // FUNÇÕES PARA STREAMS (NOVAS)
  // -------------------------------
  function addStream(data) {
    const newStream = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      category: data.category || "Geral",
      status: "offline",
    };
    setStreams((prev) => [...prev, newStream]);
  }

  function editStream(id, updatedData) {
    setStreams((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updatedData } : s))
    );
  }

  function deleteStream(id) {
    setStreams((prev) => prev.filter((s) => s.id !== id));
  }

  function toggleStreamStatus(id) {
    setStreams((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "online" ? "offline" : "online" }
          : s
      )
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        updateName,
        settings,
        updateSettings,

        // STREAMS (exposto globalmente)
        streams,
        addStream,
        editStream,
        deleteStream,
        toggleStreamStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook para acesso rápido
export function useAuth() {
  return useContext(AuthContext);
}
