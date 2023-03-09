import React from 'react'
import Intro from '../Intro'
import Intro1 from './Intro1'
import Promo from './Promo'


function HomePage() {
  return (
    <div>
        <div>
            <h1>This is the Home Page</h1>
        </div>
        <div>
            <Promo />
        </div>
        <div><Intro1 name="John" textColor="purple" text="Hello world recieved from props"/></div>
<div className='flex-item'>
      <div><Intro color="#eeeeff" compHeading="Why I love front-end web development" compText="In this blog post, I'll list 10 reasons why I love to work as a front-end developer." /></div>

      <div><Intro compHeading="What's the best way to style your React apps?" compText="There are so many options to choose from. Here's a high-level overview of the popular ones." /></div>

      <div><Intro compHeading="What's the best way to style your React apps?" compText="There are so many options to choose from. Here's a high-level overview of the popular ones." /></div>

      <div><Intro color="#eeeeff" compHeading="Why I love front-end web development" compText="In this blog post, I'll list 10 reasons why I love to work as a front-end developer." /></div>
</div>
    </div>
  )
}

export default HomePage