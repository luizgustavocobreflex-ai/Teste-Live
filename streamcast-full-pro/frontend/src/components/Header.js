import React from 'react';

export function Header(){
  return (
    <header style={{
      padding: '12px 24px',
      background: '#111827',
      color: '#f9fafb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{margin:0,fontSize:'20px'}}>StreamCast Network</h1>
      <span style={{fontSize:'14px',opacity:0.8}}>Painel do Usuário</span>
    </header>
  );
}
