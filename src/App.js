import React, { Children } from 'react'
import './App.css';

function List({rating}) {
  return (
    <>
  <h2>This is children component!</h2>
  <h3>My food's rating is {rating}</h3>
    </>
  )
}

function App() {
  
  return (
    <div>
      <h1>Hello</h1>
      <List food_name="Ramen" rating={5} />
    </div>
  );
}

export default App;
