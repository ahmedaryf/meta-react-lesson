import React from 'react'
  // const people = [
    //     'Creola Katherine Johnson: mathematician',
    //     'Mario José Molina-Pasquel Henríquez: chemist',
    //     'Mohammad Abdus Salam: physicist',
    //     'Percy Lavon Julian: chemist',
    //     'Subrahmanyan Chandrasekhar: astrophysicist'
    //   ];

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist'
  }, 
  {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist'
  }, 
  {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist'  
  }, 
  {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist'
  }];

function List() {
      const listItems = people.map((person) => {
        return <li style={{color: "blue"}} key={person.id}>{[person.name, " - ", <span key={person.id} style={{color:"green", fontWeight: 700}}>person.profession</span>]}</li>
      })
  return (
    <div>
        <h3>Name List</h3>
        <ul>{listItems}</ul>
    </div>
  )
}

export default List