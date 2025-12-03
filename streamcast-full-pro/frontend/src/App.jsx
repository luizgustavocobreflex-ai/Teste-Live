import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import MainDashboard from "./pages/MainDashboard";
import StreamsPage from "./pages/StreamsPage";
import ShopPage from "./pages/ShopPage";
import AdminPage from "./pages/AdminPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Página inicial */}
          <Route path="/" element={<MainDashboard />} />

          {/* Outras páginas */}
          <Route path="/streams" element={<StreamsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/admin" element={<AdminPage />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
