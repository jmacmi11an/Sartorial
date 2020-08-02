import React, { Component } from 'react';
import fire from "../config/fire";

class Home extends Component{
  constructor(props){
    super(props)
  }

  // logout(){
  //   fire.auth().signOut();
  // }

  render(){
    return(
      <div>
        <h1>Welcome to Sartorial</h1>
        <h3>Minimal and masterful dressing</h3>
        <p>A gentleman's guide to timeless fashion in a capsule closet. With an emphasis on quality over quantity, this curated 16 piece wardrobe provides the foundation for impeccable style</p>
        <h4>You are logged in!!</h4>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    )
  }
}

export default Home;
