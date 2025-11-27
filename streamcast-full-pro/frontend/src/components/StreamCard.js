import React from 'react';

export function StreamCard({stream}){
  return (
    <div style={{
      borderRadius:12,
      padding:12,
      background:'#020617',
      color:'#e5e7eb',
      marginBottom:12,
      boxShadow:'0 1px 3px rgba(0,0,0,0.4)'
    }}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div>
          <div style={{fontWeight:600}}>{stream.title || 'Live sem título'}</div>
          <div style={{fontSize:12, opacity:0.7}}>
            Plataforma: {stream.platform} • Canal: {stream.channelId}
          </div>
        </div>
        <span style={{
          fontSize:12,
          padding:'4px 8px',
          borderRadius:999,
          background: stream.live ? '#22c55e33' : '#6b728033',
          color: stream.live ? '#22c55e' : '#9ca3af'
        }}>
          {stream.live ? 'AO VIVO' : 'Offline'}
        </span>
      </div>
    </div>
  );
}
