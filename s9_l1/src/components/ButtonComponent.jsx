import { Component } from "react";

class ButtonComponent extends Component {
  render() {
    console.log(this);
    return <button className={this.props.className}>{this.props.buttonText}</button>;
  }
}
export default ButtonComponent;
