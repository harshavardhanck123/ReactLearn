import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducer function
const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INCR':
      return {
        counter: state.counter + 1
      }
    case 'DECR':
      if (state.counter === 0) {
        return state;
      } else {
        return {
          counter: state.counter - 1
        };
      }
    case 'ZERO':
      return {
        counter: 0
      }
    default:
      return state;
  }
}

// create a redux store
const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
