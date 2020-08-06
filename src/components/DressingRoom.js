import React, { Component } from 'react';
import _ from 'underscore';
import './dressingroom/DressingRoom.css';
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
        <h1>What would you like to wear today Mr. {(this.props.userDetails["Last Name"])}? </h1>


        {(this.state.clicked) ?
          <form onSubmit={this.onSubmit}>
            <button>Try Again</button>
          </form>
        :
          <form onSubmit={this.onSubmit}>
            <button>Dress Me</button>
          </form>
        }

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
    <div className="outfit">
      { props.outfit.map( (source) => <img src={source.data.img} alt={source.name} key={ source.name } className="outfit"/> ) }
      <h3>Continuing to build your wardrobe will give you more outfit possibilities</h3>
    </div>
  )
}



export default DressingRoom;
