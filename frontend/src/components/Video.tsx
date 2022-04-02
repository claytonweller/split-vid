import React, { useState } from 'react'

export default function Video(params: { videoId: string, isVisible?: boolean }) {
  const {
    videoId,
    isVisible = false
  } = params

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

  const visibility = isVisible ? 'visible' : 'hidden'

  return (
    <div style={{ position: 'absolute', visibility }}>
      <div>Time: {videoTime}</div>
      <video
        style={{ display: 'block' }}
        onTimeUpdate={(handleTime)}
        src={`http://localhost:5000/${videoId}/`}
        width="500px" height="auto"
        controls
        id="videoPlayer"
      />
      <button style={{ ...buttonStyle, position: 'absolute' }}>PICK</button>
    </div>
  )
}