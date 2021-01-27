import React from 'react';

class Counter1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: props.count
      };
    }
  
    increment() {
      this.setState({
        count: this.state.count + 1
      });
    };
    
    decrement() {
      this.setState({
        count: this.state.count - 1
      });
    };
  
    reset() {
      this.setState({
        count: this.props.count
      });
    };
  
    render() {
      return (
  
     <div>
     <button className='inc' onClick={(e) => this.increment(e)}>Increment</button>
      <button className='dec' onClick={(e) => this.decrement(e)}>Decrement</button>
      <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
      <h1>Add to count {this.state.count}</h1>
    </div>
      );
    }
  };

  export default Counter1;