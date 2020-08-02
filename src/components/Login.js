import React, { Component } from 'react';
import fire from '../config/fire';

class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      email: '',
      password: ''
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
          value={this.state.email}
          />
          <input
          name="password"
          type="password"
          onChange={this.props.handleChange}
          id="password"
          placeholder="enter password"
          value={this.state.password}
          />
          <button onClick={this.props.login}>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
