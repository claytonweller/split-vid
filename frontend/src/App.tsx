import React, { useState } from 'react';
import './App.css';
import ChooseButton from './components/ChooseButton';
import Video from './components/Video';

export default function App() {
  const [primaryIndex, setPrimaryIndex] = useState(0)
  const [videoTime, setVideoTime] = useState(0)
  const [buttonsAreVisible, setButtonsAreVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)


  const videoMap = {
    vid1: {
      pauseTime: 4,
      children: ['vid2', 'vid3']
    },
    vid2: {
      pauseTime: 3,
      children: ['vid1', 'vid3']
    },
    vid3: {
      pauseTime: 5,
      children: ['vid1']
    }
  }

  const handleTime = (e: any, pauseTime: number) => {
    const { currentTime } = e.target
    if (currentTime > pauseTime) {
      e.target.pause()
      setButtonsAreVisible(true)
    } else {
      setButtonsAreVisible(false)
    }
    setVideoTime(currentTime)
  }

  const videoEntries = Object.entries(videoMap)
  const videoIds = videoEntries.map(([vidId]) => vidId)
  const [primaryVidId, primaryVidDetails] = videoEntries[primaryIndex]

  const vids = videoIds.map((vidId, i) => {
    const key = `vid${i}`
    if (vidId === primaryVidId) return (
      <Video
        pauseTime={primaryVidDetails.pauseTime}
        key={key}
        videoId={vidId}
        isVisible
        handleTime={handleTime}
        isPlaying={isPlaying}
      />
    )
    return <Video key={key} videoId={vidId} isPlaying={false} />
  })

  const handleChoice = (index: number) => {
    setPrimaryIndex(index)
    setButtonsAreVisible(false)
    setIsPlaying(true)
  }





  const choiceButtons = primaryVidDetails.children.map((child) => {
    const i = videoIds.findIndex(id => id === child)
    const key = `choice${i}`
    const button = <ChooseButton handleChoice={handleChoice} index={i} key={key} buttonsAreVisible={buttonsAreVisible} text={child} />
    return button
  })





  return (
    <div className="App">
      <header className="App-header">
        Split-Vid
        <div>
          <div>Time: {videoTime}</div>
          {vids}
          {choiceButtons}
        </div>
      </header>
    </div>
  );
}