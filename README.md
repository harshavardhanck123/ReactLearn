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

24/04/24

<h2>React-Router Dom</h2>

29/04/24

<h2>Conetx-Api</h2>

import React, { useContext, useState } from 'react';
import { profilename } from '../App';

const Profile = () => {
    const { name, setName } = useContext(profilename);
  

    const updateName = (e) => {
        e.preventDefault(); 
        const newName = e.target.elements.newName.value;
        setName(newName); 
        e.target.elements.newName.value = "";
    };

    return (
        <div>
            <form onSubmit={updateName}>
                <input type='text' defaultValue={name} name='newName'/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Profile;


import React, { createContext ,useState} from 'react'
import Profile from './components/Profile';

export const profilename=createContext();

const App = () => {
 
   const [name,setName]=useState("Guvi");

   const updateName=(newName)=>{
    setName(newName);
   }

  return (
    <div>
        <p>
            Profilename: {name}
        </p>
        <profilename.Provider value={{name,updateName}}>
            <Profile/>
        </profilename.Provider>
    </div>
  )
}

export default App

-[] UseReducer

App.jsx

import {useReducer} from 'react'
import { initialState, reducer } from "./reducers/countReducer";

const App = () => {

   const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        <h2>Counter: {state.count}</h2>
        <button onClick={()=>dispatch({type:'incr'})}>Increment </button>
        <button onClick={()=>dispatch({type:'decr'})}>decrement </button>
    </div>
  )
}

export default App

countReducer.js

const initialState = {
    count: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'incr':
            return {
                count: state.count + 1
            }
        case 'decr':
            return {
                count: state.count - 1
            }
        default:
            return state;

    }

}

export {
    initialState,
    reducer
}


import { set } from "firebase/database";
