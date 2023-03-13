import React from 'react'
import List from './List'
import LogInOut from './LogInOut'
import TimeTest from './TimeTest'
import VideoComponent from './VideoComponent'

function AboutPage() {
  return (
    <div>
        <div>
            <h1>This is the About Page</h1>
        </div>
        <div>
          <TimeTest />
        </div>
        <LogInOut />
        <br />
        <List />
        <br />
        <VideoComponent />
    </div>
  )
}

export default AboutPage