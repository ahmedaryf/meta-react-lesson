import React from 'react'
import ReactPlayer from 'react-player';

function VideoComponent() {
  return (
    <div>
        <h2>My Video Component</h2>
        <ReactPlayer url="https://youtu.be/UNUz1-msbOM" />
    </div>
  )
}

export default VideoComponent