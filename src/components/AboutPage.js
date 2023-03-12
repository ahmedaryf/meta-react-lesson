import React from 'react'
import List from './List'
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
    <br />
    <List />
    </div>
  )
}

export default AboutPage