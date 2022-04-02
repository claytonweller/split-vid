import React, { useState } from 'react'

export default function Video(props: {
  pauseTime?: number,
  videoId: string,
  isVisible?: boolean,
  handleTime?: (e: any, pauseTime: number) => void
}) {
  const {
    videoId,
    isVisible = false,
    handleTime = (e) => console.log(e),
    pauseTime = Infinity
  } = props

  const visibility = isVisible ? 'visible' : 'hidden'
  const position = isVisible ? 'relative' : 'absolute'

  return (
    <video
      style={{ visibility, position, display: 'block' }}
      onTimeUpdate={(e) => handleTime(e, pauseTime)}
      src={`http://localhost:5000/${videoId}/`}
      width="500px" height="auto"
      controls
      id="videoPlayer"
    />

  )
}