import React from 'react'
import './App.css';

const foodList = [
  {
    name : "Ramen",
    rating : 9
  },
  {
    name : "soup",
    rating : 7
  },
  {
    name : "rice",
    rating : 8
  }
]

function List({props}) {
  return (
    <>
  <h2>This is children component!</h2>
  <h3>My favorite food's name is {props}</h3>
    </>
  )
}

function App() {
  
  return (
    <div>
      <h1>Hello</h1>
      {foodList.map(item => (<List name={item.name}/>))}
    </div>
  );
}

export default App;
