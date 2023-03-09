import React from 'react'
import ModeTogle from '../ModeTogler'
import DarkMode from './DarkMode'
import InputComponent from './InputComponent'
import TestStateComponent from './TestStateComponent'
import TestTextComponent from './TestTextComponent'
import TimeComponent from './TimeComponent'
import WalletComponent from './WalletComponent'

function ProjectPage() {
  return (
    <div>
        <div>
            <h1>This is the Project Page</h1>
        </div>

        <DarkMode />
        <br />
        <ModeTogle />
        <br />
        <InputComponent />
        <br />
        <TestStateComponent />
        <br />
        <TestTextComponent />
        <br />
        <WalletComponent />
        <br />
        <TimeComponent />
       
    </div>
  )
}

export default ProjectPage