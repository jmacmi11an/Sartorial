import React, { Component } from 'react';
import fire from '../config/fire';




class PersonalInfoForm extends Component{
  constructor(){
    super()
    this.state = {
      wardrobeZero : {
      }
    }
  }

  imageClick = (image) => {
    let item = image.target.name
    console.log(fire.storage(), fire.database())
    console.log(image.target.name)
    this.setState({
      // wardrobeZero.[item].own = true
    })
  }

  render(){
    return(
      <form class="wardrobe0">
        <label>First Name</label>
        <input
        type="text"
        name="first name"
        id="first name"
        placeholder="John"
        // onChange={this.handleChange}
        // value={this.state.email}
        />
        <label>Last Name</label>
        <input
        name="last name"
        type="last name"
        onChange={this.handleChange}
        id="last name"
        placeholder="Doe"
        // value={this.state.password}
        />
        <label>Date of Birth</label>
        <input
        name="last name"
        type="date"
        onChange={this.handleChange}
        id="last name"
        placeholder="01/01/2000"
        // value={this.state.password}
        />
        <button>Next Page...</button>
      </form>
    )
  }
}

export default PersonalInfoForm;
