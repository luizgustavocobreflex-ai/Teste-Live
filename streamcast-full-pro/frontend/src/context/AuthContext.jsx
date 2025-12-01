import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const storedUser = JSON.parse(localStorage.getItem("streamcast_user"));
  const [user, setUser] = useState(storedUser || null);

  function login(userData) {
    setUser(userData);
    localStorage.setItem("streamcast_user", JSON.stringify(userData));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("streamcast_user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
