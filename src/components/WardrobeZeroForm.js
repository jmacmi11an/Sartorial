import React, { Component } from 'react';
import { db, currentUser } from '../config/fire';
import './WardrobeZero.css';
import zero from './Helpers/wardrobes/zero';


class WardrobeZeroForm extends Component{
  constructor(props){
    super(props)
    this.state = {
        "BlackTShirt" : false,
        "BlueTShirt" : false,
        "WhiteTShirt" : false,
        "BluePolo" : false,
        "BlueChambrayShirt" : false,
        "WhiteShirt" : false,
        "BlueShirt" : false,
        "GreySweater" : false,
        "GreyTrousers" : false,
        "BlueJeans" : false,
        "KhakiChinos" : false,
        "BlueBlazer" : false,
        "BlackCafeRacerJacket" : false,
        "BlackBoots" : false,
        "WhiteSneakers" : false,
        "CamelSweater" : false,
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  imageClick = (image) => {
    this.state[image.target.name] ? this.setState({ [image.target.name] : false }) : this.setState({ [image.target.name] : true })
  }

  async onSubmit(event){
    event.preventDefault()
    const user = await currentUser();
    await db
      .collection("users")
      .doc(user.uid)
      .update({
        wardrobeZero : this.state,
      })
    await this.props.updateUserState()
    this.props.history.push('/dressingroom')
  };


  render(){
    return(
      <form class="wardrobe0" onSubmit={this.onSubmit}>
        <h3>Now, select which of these you already own</h3>
        <p>Don't worry about perfect matches, so long as you have something that is similar.</p>
        <div className="hanger">
          <img src={zero.blacktshirt.img} alt="Black T Shirt" name="BlackTShirt" onClick={this.imageClick} className={this.state["BlackTShirt"] ? "active" : null}/>
          <img src={zero.bluetshirt.img} alt="Blue T Shirt" name="BlueTShirt" onClick={this.imageClick} className={this.state["BlueTShirt"] ? "active" : null}/>
          <img src={zero.whitetshirt.img} alt="White T Shirt" name="WhiteTShirt" onClick={this.imageClick} className={this.state["WhiteTShirt"] ? "active" : null}/>
          <img src={zero.bluepolo.img} alt="Blue Polo" name="BluePolo" onClick={this.imageClick} className={this.state["BluePolo"] ? "active" : null}/>
        </div>
        <div className="hanger">
          <img src={zero.bluechambrayshirt.img} alt="Blue Chambray Shirt" name="BlueChambrayShirt" onClick={this.imageClick} className={this.state["BlueChambrayShirt"] ? "active" : null}/>
          <img src={zero.whiteshirt.img} alt="White Shirt" name="WhiteShirt" onClick={this.imageClick} className={this.state["WhiteShirt"] ? "active" : null}/>
          <img src={zero.blueshirt.img} alt="Blue Shirt" name="BlueShirt" onClick={this.imageClick} className={this.state["BlueShirt"] ? "active" : null}/>
          <img src={zero.greysweater.img} alt="Grey Sweater" name="GreySweater" onClick={this.imageClick} className={this.state["GreySweater"] ? "active" : null}/>
        </div>
        <div className="hanger">
          <img src={zero.camelsweater.img} alt="Camel Sweater" name="CamelSweater" onClick={this.imageClick} className={this.state["CamelSweater"] ? "active" : null}/>
          <img src={zero.greytrousers.img} alt="Grey Trousers" name="GreyTrousers" onClick={this.imageClick} className={this.state["GreyTrousers"] ? "active" : null}/>
          <img src={zero.bluejeans.img} alt="Blue Jeans" name="BlueJeans" onClick={this.imageClick} className={this.state["BlueJeans"] ? "active" : null}/>
          <img src={zero.khakichinos.img} alt="Khaki Chinos" name="KhakiChinos" onClick={this.imageClick} className={this.state["KhakiChinos"] ? "active" : null}/>
        </div>
        <div className="hanger">
          <img src={zero.blueblazer.img} alt="Blue Blazer" name="BlueBlazer" onClick={this.imageClick} className={this.state["BlueBlazer"] ? "active" : null}/>
          <img src={zero.blackcaferacerjacket.img} alt="Black Cafe Racer" name="BlackCafeRacerJacket" onClick={this.imageClick} className={this.state["BlackCafeRacerJacket"] ? "active" : null}/>
          <img src={zero.blackboots.img} alt="Black Boots" name="BlackBoots" onClick={this.imageClick} className={this.state["BlackBoots"] ? "active" : null}/>
          <img src={zero.whitesneakers.img} alt="White Sneakers" name="WhiteSneakers" onClick={this.imageClick} className={this.state["WhiteSneakers"] ? "active" : null}/>
        </div>

        <div className="buttons">
          <button>Next Page...</button>
        </div>
        <p></p>
      </form>
    )
  }
}

export default WardrobeZeroForm;
