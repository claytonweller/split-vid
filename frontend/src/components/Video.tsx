import React from 'react'

export default function Video(props: {
  pauseTime?: number,
  videoId: string,
  isVisible?: boolean,
  handleTime?: (e: any, pauseTime: number) => void,
  isPlaying: boolean
}) {
  const {
    videoId,
    isVisible = false,
    handleTime = (e) => console.log(e),
    pauseTime = Infinity,
    isPlaying
  } = props

  const handlePlaying = (e: any) => {
    if (isPlaying) e.target.play()
  }

  const visibility = isVisible ? 'visible' : 'hidden'
  const position = isVisible ? 'relative' : 'absolute'

  return (
    <video
      style={{ visibility, position, display: 'block' }}
      onCanPlay={handlePlaying}
      onTimeUpdate={(e) => handleTime(e, pauseTime)}
      src={`http://localhost:5000/${videoId}/`}
      width="500px" height="auto"
      controls
      id="videoPlayer"
    />

  )
}