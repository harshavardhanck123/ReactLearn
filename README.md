// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>Hello,World!</h1>
//     <p>This is a simple component</p>
//     </div>
    
//   )
// }

// export default App

import { Component } from 'react'

class App extends Component{
  render(){
    return(
      <div>
      <h1>Hello,World!</h1>
    <p>This is a simple component</p>
    </div>
    )
  }
}

export default App

Hooks

import { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(0);
  const [decrement, setDecrement] = useState(counter);
  const [reset, setReset] = useState(0);
  const handleClick = (action) => {
    if (action === 'incr') {
      setCounter(counter + 1);
    } else if (action === 'decr') {
      setCounter(counter - 1);
      setDecrement(decrement+1); // Update decrement state
    } else if (action === 'zero') {
      setCounter(0);
      setReset(reset + 1); // Update reset state
    }
  };
 

  return (
    <div>
      <p>plus: { counter }</p>
      <p>minus: { decrement }</p>
      <p>zero: { reset }</p>
      <button onClick={()=>{handleClick('incr')}}>plus</button>
      <button onClick={()=>{handleClick('decr')}}>minus</button>
      <button onClick={()=>{handleClick('zero')}}>zero</button>
    </div>
  )
}

export default App;

23/04/24
