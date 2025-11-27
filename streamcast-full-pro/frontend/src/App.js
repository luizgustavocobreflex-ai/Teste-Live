import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './pages/DashboardPage';
import { StreamsPage } from './pages/StreamsPage';
import { ShopPage } from './pages/ShopPage';
import { AdminPage } from './pages/AdminPage';

function App(){
  return (
    <div style={{display:'flex', height:'100vh', background:'#020617'}}>
      <Sidebar />
      <div style={{flex:1, display:'flex', flexDirection:'column'}}>
        <Header />
        <main style={{flex:1, overflow:'auto', background:'#020617'}}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/streams" element={<StreamsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
