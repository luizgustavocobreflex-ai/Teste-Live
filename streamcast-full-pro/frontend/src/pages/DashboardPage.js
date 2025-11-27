import React, { useEffect, useState } from 'react';
import api from '../services/api';

export function DashboardPage(){
  const [health, setHealth] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/api/health').then(r => setHealth(r.data)).catch(() => setHealth({status:'erro'}));
    api.get('/api/users').then(r => setUsers(r.data)).catch(() => setUsers([]));
  }, []);

  return (
    <div style={{padding:24, color:'#e5e7eb'}}>
      <h2 style={{marginTop:0}}>Dashboard</h2>
      <div style={{display:'flex', gap:16, flexWrap:'wrap'}}>
        <div style={{background:'#020617', padding:16, borderRadius:12, minWidth:200}}>
          <div style={{fontSize:12, opacity:0.7}}>Status Backend</div>
          <div style={{fontSize:18, marginTop:4}}>
            {health ? health.status : 'carregando...'}
          </div>
        </div>
        <div style={{background:'#020617', padding:16, borderRadius:12, minWidth:200}}>
          <div style={{fontSize:12, opacity:0.7}}>Usuários cadastrados</div>
          <div style={{fontSize:18, marginTop:4}}>
            {users.length}
          </div>
        </div>
      </div>

      <h3 style={{marginTop:24}}>Usuários (exemplo)</h3>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.username} - {u.email} - pontos: {u.points}</li>
        ))}
      </ul>
    </div>
  );
}
