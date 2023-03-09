import React from 'react'
import Card from '../Card'
import CardText from './CardText'
import CardTwo from './CardTwo'
import Profile from './Profile'
import TodoList from './TodoList'
import image from "../images/keyodhoo-drone-13-7-m.jpg"
import image2 from "../images/underwater1-m.jpg"

function ContactPage() {
  return (
    <div>
        <div>
            <h1>This is the Contact Page</h1>
        </div>
        <br />
        <Card image={image} width={70} height={70} title="This is card title" body="This is card body with some text"/>
        <br />
        <Card image={image2} title="This is card title 2" body="This is card body with different text"/>

      {/* Profile and CardText were wrapped in CardTwo component */}
      <CardTwo>
        <Profile />
        <CardText title="Card using props" text="This text is passed from parent component"/>
      </CardTwo>
      <br />
      <TodoList />
    </div>
  )
}

export default ContactPage