import React from 'react';
import { Link } from 'react-router-dom';

export function Sidebar(){
  const linkStyle = {color:'#e5e7eb', textDecoration:'none', display:'block', padding:'8px 12px', borderRadius:8};
  const wrapStyle = {padding:'8px 8px', marginTop:'8px'};

  return (
    <aside style={{
      width:220,
      background:'#020617',
      color:'#e5e7eb',
      padding:'16px 8px',
      boxSizing:'border-box'
    }}>
      <h2 style={{fontSize:14, textTransform:'uppercase', letterSpacing:1, color:'#9ca3af', padding:'0 12px'}}>Menu</h2>
      <div style={wrapStyle}>
        <Link to="/" style={linkStyle}>Dashboard</Link>
        <Link to="/streams" style={linkStyle}>Streams</Link>
        <Link to="/shop" style={linkStyle}>Loja</Link>
        <Link to="/admin" style={linkStyle}>Admin</Link>
      </div>
    </aside>
  );
}
