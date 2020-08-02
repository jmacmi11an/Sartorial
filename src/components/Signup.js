import React, { Component } from 'react';
import fire from "../config/fire";

class Signup extends Component{
  constructor(props){
    super(props)
    this.state={
      user : {}
    }
  }


  render(){
    return(
      <div>
        <form>
          <input
          type="email"
          name="email"
          id="email"
          placeholder="enter email address"
          onChange={this.props.handleChange}
          value={this.email}
          />
          <input
          name="password"
          type="password"
          onChange={this.handleChange}
          id="password"
          placeholder="enter password"
          value={this.password}
          />
          <button onClick={this.props.signup}>Signup</button>
        </form>
      </div>
    )
  }
}

export default Signup;
