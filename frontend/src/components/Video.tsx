import React, { useState } from 'react'

export default function Video(params: { videoId: string, isVisible?: boolean, handleTime?: (e: any) => void }) {
  const {
    videoId,
    isVisible = false,
    handleTime
  } = params

  const visibility = isVisible ? 'visible' : 'hidden'
  const position = isVisible ? 'relative' : 'absolute'

  return (
    <video
      style={{ visibility, position, display: 'block' }}
      onTimeUpdate={(handleTime)}
      src={`http://localhost:5000/${videoId}/`}
      width="500px" height="auto"
      controls
      id="videoPlayer"
    />

  )
}