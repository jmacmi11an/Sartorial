import React, { Component } from 'react';
import _ from 'underscore';
import fire, { db, currentUser } from "../config/fire";
import { createOutfit } from './Helpers/outfit';




class DressingRoom extends Component{
  constructor(props){
    super(props);
    this.state={
      myWardrobeZero: {},
      filteredWardrobe: [],
      clicked: false,
    }

    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(event){
    event.preventDefault();
    this.setState({
      myWardrobeZero: this.props.userDetails.wardrobeZero,
      clicked: true,
      outfit: createOutfit(this.props.filteredClothes)

    })
  }




  render(props){
    return(
      <div>
        <h1>Dressing Room coming soon</h1>
        <p>First name: {this.props.userDetails["First Name"]}</p>
        <p>Last name: {this.props.userDetails["Last Name"]}</p>
        <p>DOB: {this.props.userDetails["DOB"]}</p>
        <div>
        <form onSubmit={this.onSubmit}>
          <button>Dress Me</button>
        </form>


        </div>
        {(this.state.clicked) ?
          <div>
            <Outfit outfit={this.state.outfit}/>
          </div>
          :
          null
        }
      </div>
    )
  }
}





function Outfit(props){
  console.log(props.outfit)

  return(
    <div>
      { props.outfit.map( (source) => <img src={source.data.img} alt={source.name} key={ source.name } className="outfit"/> ) }
      <h3>click worked</h3>
    </div>
  )
}



export default DressingRoom;










//write a dressMe function that receives the wardrobeZero array
  //create a tops array
  //create a bottoms array
  //create a shoes array
  //create an outerwear array
  //create an empty results array
  //map over the wardrobeZero array.
    //if an element is a top push to tops
    //if an element is a bottom push to bottoms
    //if an element is shoes push to shoes
    //if an element is outerwear push to outerwear
  //push a top sample to the result array
  //push a bottom sample to the result array
  //push a shoes sample to the result array
  //push a outerwear sample to the result array
  //return the result array and set the state to the results array


  //create four divs
  //populate the four divs with the foru selected sample photos.

  //create a button
    //on click run the dressMe function for new samples
    //re render the four divs.
