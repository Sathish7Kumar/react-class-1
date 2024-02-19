//LifeCycle.js
import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor: Component is being constructed');
  }
  componentDidMount() {
    console.log('ComponentDidMount: Component is now mounted to the DOM');
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate: Component updated and re-rendered');
  }
  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is about to be unmounted');
  }
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  reset = () => {
    this.setState({
      count: 0
    });
  };
  render() {
    console.log('Render: Component UI is being rendered');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default LifeCycle;


