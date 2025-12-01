import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    // Aqui futuramente vamos chamar o backend.
    // Por enquanto, simulação:

    const fakeUser = {
      name: "Luiz",
      email: "admin@streamcast.com",
      role: "admin", // ou "user"
      token: "123456789",
    };

    login(fakeUser);

    if (fakeUser.role === "admin") navigate("/dashboard");
    else navigate("/streams");
  }

  return (
    <div className="login-container">
      <h1>StreamCast Login</h1>

      <form className="login-box" onSubmit={handleSubmit}>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
