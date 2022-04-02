import React, { useState } from 'react';
import './App.css';
import Video from './components/Video';

export default function App() {
  const [isSwapped, setIsSwapped] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        Split-Vid
        <button onClick={() => setIsSwapped(!isSwapped)}>swap/</button>
        <Video videoId='vid2' isVisible={!isSwapped} />
        <Video videoId='vid1' isVisible={isSwapped} />
      </header>
    </div>
  );
}