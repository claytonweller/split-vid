import React from 'react';
import './App.css';


export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        Split-Vid
        <video src="http://localhost:5000/videoId/" width="500px" height="auto" controls autoPlay id="videoPlayer"></video>
      </header>
    </div>
  );
}