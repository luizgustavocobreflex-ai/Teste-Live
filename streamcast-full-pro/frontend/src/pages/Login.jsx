import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <h1>StreamCast Login</h1>

      <form className="login-box">
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
