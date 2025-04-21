import React from 'react';
class MyBook extends React.Component {
  constructor(props) {
    console.log("constructor: ");
    super(props);
    this.state = {
      color: 'red',
      colourArray: ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'],
        index: 0,
    };
    
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: ");
    // if (props.bookColor !== state.color) {
    //   return {color: props.bookColor};
    // }
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount: ");
    this.timer = setInterval(() => {
        console.log("componentDidMount: timer: ", this.state.index);
        this.setState({index: this.state.index < this.state.colourArray.length-1 ?  this.state.index + 1 : 0
        });
      }, 3000);
  } 

  componentDidUpdate() {
    console.log("componentDidUpdate: ");
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate: ");
    return null;
  }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate: this.state.color: ", this.state.color, 'nextState.color: ', nextState.color);
//     if (this.state.color !== nextState.color) {
//       return false;
//     }
//     return true;
//   }
  componentWillUnmount() {
    console.log("componentWillUnmount: ");
    clearTimeout(this.timer);
  }
  render() {
    const { colourArray, index, color } = this.state;
    console.log("render: ");
    return (
      <div>
        <h1>MyBook Component</h1>
        <h1 style={ {color: colourArray[index]} }>color: {color}</h1>
      </div>
    );
  }
}
export default MyBook;