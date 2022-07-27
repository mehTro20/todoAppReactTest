import React, { Component } from "react";
import './App.css';
// import {Navbar, Nav, Button} from 'react-bootstrap';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      result: "",
     
    };

    this.getValues = this.getValues.bind(this);
  }

  getValues(){
    this.setState({
      result: myVue(),
      
    })
  }


  render() {
    return (
      <div className="App">
        <h1>To do</h1>
        <div class="input">
          <label>To do:
          <input type="text" id="subject"/></label>
          <label>Why:
            <input type="text" id="description"/></label>
          <button type="submit" onClick={myVue} >Save</button>
        </div>


        <div className="table">
        <table>
        <thead>
          <th>Subject</th>
          <th>Description</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.result[0]}</td>
            <td>{this.state.result[1]}</td>
            <td>ll</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    );
  }
}
const myVue = () => {

  let sub = document.getElementById("subject").value;
  let desc = document.getElementById("description").value;
  

  return sub.split().concat(desc);
};
// const mySubmit = (event) => {

//   // event.preventDefault();
  

//   // let subjec = document.getElementById("subject").value;
//   // let descriptio = document.getElementById("description").value;
  
//   if (subjec === "" || descriptio === ""){
//       return alert("Please fill all spaces");
//   } 
// };




