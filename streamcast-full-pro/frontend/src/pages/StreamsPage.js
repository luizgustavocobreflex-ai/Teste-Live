import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { StreamCard } from '../components/StreamCard';

export function StreamsPage(){
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    api.get('/api/streams').then(r => setStreams(r.data)).catch(() => setStreams([]));
  }, []);

  return (
    <div style={{padding:24, color:'#e5e7eb'}}>
      <h2 style={{marginTop:0}}>Streams cadastradas (exemplo)</h2>
      {streams.map(s => <StreamCard key={s.id} stream={s} />)}
      {streams.length === 0 && <p style={{opacity:0.7}}>Nenhuma stream cadastrada ainda.</p>}
    </div>
  );
}
