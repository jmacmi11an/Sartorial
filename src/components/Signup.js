import React, { Component } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import faker from 'faker';

class Signup extends Component{
  constructor(props){
    super(props)
    this.state={
      password: 'chicken',
      email: faker.internet.email(),
      clicked: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.signup(this.state.email, this.state.password)
    this.props.history.push('/details')

  }

  render(){
    return(
      <div>
        <h2>A few more steps until your journey starts</h2>
        {!(this.state.clicked) ?
        <form onSubmit={this.handleSubmit}>
          <input
          type="email"
          name="email"
          id="email"
          placeholder="enter email address"
          onChange={this.handleChange}
          value={this.state.email}
          />
          <input
          name="password"
          type="password"
          onChange={this.handleChange}
          id="password"
          placeholder="enter password"
          value={this.state.password}
          />
          <div className="buttons">
            <button>Signup</button>
          </div>
        </form>
        :
        <div>
          <PersonalInfoForm/>
        </div>
      }
      </div>
    )
  }
}

export default Signup;
