// Cart.js
import React from "react";
import { Link } from "react-router-dom";
class Cart extends React.Component {

  state = {
    count: 0,
  };



  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <Link to="/">HOME</Link>
        <h2>{this.props.name}</h2>
        <h2>Cart-Count : {this.state.count} </h2>
        <button onClick={this.addCount}>ADD</button>
      </div>
    );
  }
}
export default Cart;

// const num = 20
// // odd , even 
// if(num % 2 === 0){
//   console.log("even");
// }else{
//   console.log("odd");
// }
// // ternary  op
// const result = (num%2 === 0) ? "even" : "odd"
// console.log(result);




