import React, { Component } from 'react';
import './dressingroom/DressingRoom.css';
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
        {(this.state.clicked) ?
          <div>
            <Outfit outfit={this.state.outfit}/>
          </div>
          :
          null
        }

        {(this.state.clicked) ?
          <form onSubmit={this.onSubmit}>
            <div className="buttons">
              <button>Try Again</button>
              <h3>Continuing to build your wardrobe will give you more outfit possibilities</h3>
            </div>
          </form>
        :
          <form onSubmit={this.onSubmit}>
            <div className="buttons">
              <button>Dress Me</button>
            </div>
          </form>
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
    </div>
  )
}



export default DressingRoom;
