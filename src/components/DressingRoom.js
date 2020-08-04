import React, { Component } from 'react';
import fire from "../config/fire";

class DressingRoom extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <h1>Dressing Room coming soon</h1>
      </div>
    )
  }
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
