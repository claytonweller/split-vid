import React, { useState } from 'react';
import './App.css';
import ChooseButton from './components/ChooseButton';
import Video from './components/Video';

export default function App() {
  const [primaryIndex, setPrimaryIndex] = useState(0)
  const [videoTime, setVideoTime] = useState(0)
  const [buttonsAreVisible, setButtonsAreVisible] = useState(false)

  const handleTime = (e: any) => {
    const { currentTime } = e.target
    if (currentTime > 4) {
      e.target.pause()
      setButtonsAreVisible(true)
    } else {
      setButtonsAreVisible(false)
    }
    setVideoTime(currentTime)
  }

  const vidIds = [
    'vid1', 'vid2', 'vid3'
  ]

  const vids = vidIds.map((vidId, i) => {
    const isPrimary = i === primaryIndex
    const key = `vid${i}`
    if (isPrimary) return <Video key={key} videoId={vidId} isVisible handleTime={handleTime} />
    return <Video key={key} videoId={vidId} />
  })

  const choiceButtons = vidIds.reduce((buttons, vidId, i) => {
    const isPrimary = i === primaryIndex
    const key = `choice${i}`

    const button = <ChooseButton key={key} buttonsAreVisible={buttonsAreVisible} text={vidId} />
    if (!isPrimary) return [...buttons, button]
    return buttons
  }, [] as any)


  const handleClick = () => {
    const nextIndex = primaryIndex + 1
    const shouldLoopBack = nextIndex > vidIds.length - 1
    setPrimaryIndex(shouldLoopBack ? 0 : nextIndex)
  }


  return (
    <div className="App">
      <header className="App-header">
        Split-Vid
        <button onClick={handleClick}>swap/</button>
        <div>
          <div>Time: {videoTime}</div>
          {vids}
          {choiceButtons}
        </div>
      </header>
    </div>
  );
}