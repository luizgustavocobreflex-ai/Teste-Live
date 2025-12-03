import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const { login } = useAuth();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // LOGIN DE TESTE
    if (user === "admin" && pass === "1234") {
      login({ name: "Administrador" });
      return;
    }

    setError("Usuário ou senha incorretos.");
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Entrar</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Acessar</button>
      </form>
    </div>
  );
}
