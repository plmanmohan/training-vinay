import React from "react";
import Customer from "./Customer";

class Teacher extends React.Component {
  constructor(props) {
    console.log("constructor: ");
    super(props);
    this.state = {
      counter: 1,
      age: 10,
      toggle: false,
    };
  }
  myage =0
  handleClick = () => {
    this.setState({counter: this.state.counter + 1, age: this.state.age + 5,
        toggle: !this.state.toggle
    });
    this.myage = this.myage + 5;

  };
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps: ");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount: ", this.myage);
  }
  render() {
    console.log("render: ");
    const { num } = this.props;
    const { counter, age } = this.state;
    return (
      <div>
        <h1>Teacher Component</h1>
        <p>Num: {num}</p>
        <p>counter: {counter}</p>
        <p>age: {age}</p>
        <button onClick={this.handleClick}>Increase counter</button>
        <Customer count={counter} toggle= {this.state.toggle}/>
      </div>
    );
  }
}

export default Teacher;
