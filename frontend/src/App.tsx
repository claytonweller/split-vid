import React, { useState } from 'react';
import './App.css';


export default function App() {
  const [videoTime, setVideoTime] = useState(0)
  const handleTime = (e: any) => {
    const { currentTime } = e.target
    if (currentTime > 4) e.target.pause()
    setVideoTime(currentTime)
  }

  return (
    <div className="App">
      <header className="App-header">
        Split-Vid
        <div>TimeStamp: {videoTime}</div>
        <div>
          <button style={{ position: 'relative', top: 200, left: 0, width: '20%' }}>PICK</button>
          <video onTimeUpdate={(handleTime)} src="http://localhost:5000/videoId/" width="500px" height="auto" controls id="videoPlayer"></video>
        </div>
      </header>
    </div>
  );
}