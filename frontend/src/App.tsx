import React, { useState } from 'react';
import './App.css';


export default function App() {
  const [videoTime, setVideoTime] = useState(0)
  const [buttonIsVisible, setButtonIsVisible] = useState(false)
  const handleTime = (e: any) => {
    const { currentTime } = e.target
    if (currentTime > 4) {
      e.target.pause()
      setButtonIsVisible(true)
    }
    setVideoTime(currentTime)
  }
  const buttonStyle = {
    width: '20%',
    zIndex: 10,
    bottom: 50,
    display: buttonIsVisible ? 'inline' : 'none'
  }

  return (
    <div className="App">
      <header className="App-header">
        Split-Vid
        <div>TimeStamp: {videoTime}</div>
        <div style={{ position: 'relative' }}>
          <video
            style={{ display: 'block' }}
            onTimeUpdate={(handleTime)}
            src="http://localhost:5000/videoId/"
            width="500px" height="auto"
            controls
            id="videoPlayer"
          />
          <button style={{ ...buttonStyle, position: 'absolute' }}>PICK</button>
        </div>
      </header>
    </div>
  );
}