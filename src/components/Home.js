//need to change 3 inputs back to just WardrobeZero

import React, { Component } from 'react';
import WardrobeZeroForm from './WardrobeZeroForm';

class Home extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(

      <div>
        <h1>Welcome to Sartorial</h1>
        <h3>Minimal and masterful dressing</h3>
        <p>A gentleman's guide to timeless fashion in a capsule closet. With an emphasis on quality over quantity, this curated 16 piece wardrobe provides the foundation for impeccable style. </p>
        <WardrobeZeroForm/>
      </div>
    )
  }
}

export default Home;


//can I put this right after the opening div?
// {this.props.user.email
// ?
// <div>
//   <h3>Welcome {this.props.user.email}</h3>
// </div>
// :
// <div>
//   <h3>Welcome guest</h3>
// </div>}
