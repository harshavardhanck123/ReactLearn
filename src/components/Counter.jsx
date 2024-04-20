import { Component } from "react";

class Counter extends Component {
    render() {
      return (
        <p>Counter: {this.props.counter}</p>
      )
    }
  }

  export default Counter