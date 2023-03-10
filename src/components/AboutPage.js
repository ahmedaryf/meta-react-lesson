import React from 'react'
import LogInOut from './LogInOut'
import TimeTest from './TimeTest'

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
    </div>
  )
}

export default AboutPage