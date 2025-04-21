import React from "react";

class LoginClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    console.log("LoginClassComponent mounted: ", this.inputRef.current);
    this.inputRef.current.focus();
  }
  render() {
    return (
      <input ref={this.inputRef} id="uid" type="text" placeholder="User name" />
    );
  }
}
export default LoginClassComponent;
