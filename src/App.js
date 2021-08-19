import React from 'react'
import './App.css';

const foodList = [
  {
    id : 1,
    name : "Ramen",
    rating : 9
  },
  {
    id : 2,
    name : "soup",
    rating : 7
  },
  {
    id : 3,
    name : "rice",
    rating : 8
  }
]

function List({name, rating}) {
  return (
    <>
  <h2>This is children component!</h2>
  <h3>My favorite food's name is {name}</h3>
    </>
  )
}

function renderList(props){
  //console.log(props)
  return <List key={props.id} name={props.name} rating={props.rating}/>
}

function App() {
  
  return (
    <div>
      <h1>Hello</h1>
      {foodList.map(renderList)}
    </div>
  );
}

export default App;
