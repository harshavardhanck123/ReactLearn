import { Component } from 'react';
import Counter from '/src/components/Counter.jsx'


class App extends Component {

  constructor(props) {
    super(props); // to call the constructor of the parent class

    // define the state
    this.state = {
      counter: 0
    }
  }

  handleIncrement = () => {
    // update the state (data) of the component: counter
    this.setState({
      // provide a new state
      counter: this.state.counter + 1
    })
  }

  handleDecrement = () => {
    // update the state (data) of the component: counter
    this.setState({
      // provide a new state
      counter: this.state.counter -1 
    })
  }

  handleReset = () => {
    // update the state (data) of the component: counter
    this.setState({
      // Reset
      counter: this.state.counter=0
    })
  }



  render() {
    console.log(`rendering...${this.state.counter}`)
    return (
      <div>
        <Counter counter={ this.state.counter } />
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default App;