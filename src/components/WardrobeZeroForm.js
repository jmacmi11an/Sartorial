import React, { Component } from 'react';
import fire, { db, currentUser } from '../config/fire';
import './WardrobeZero.css';
import BlackCafeRacerJacket from '../images/blackcaferacerjacket.jpg';
import BlackBoots from '../images/blackboots.jpg';
import BlackTShirt from '../images/blacktshirt.jpg';
import BlueBlazer from '../images/blueblazer.jpg';
import BlueChambrayShirt from '../images/bluechambrayshirt.jpg';
import BlueJeans from '../images/bluejeans.jpg';
import BluePolo from '../images/bluepolo.jpg';
import BlueShirt from '../images/blueshirt.jpg';
import BlueTShirt from '../images/bluetshirt.jpg';
import GreySweater from '../images/greysweater.jpg';
import GreyTrousers from '../images/greytrousers.jpg';
import KhakiChinos from '../images/khakichinos.jpg';
import WhiteShirt from '../images/whiteshirt.jpg';
import WhiteSneakers from '../images/whitesneakers.jpg';
import WhiteTShirt from '../images/whitetshirt.jpg';



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
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  imageClick = (image) => {
    this.state[image.target.name] ? this.setState({ [image.target.name] : false }) : this.setState({ [image.target.name] : true })
  }

  async onSubmit(){
    const user = await currentUser();
    if (user){
      db
        .collection("users")
        .doc(user.uid)
        .update({
          wardrobeZero : this.state,
        })
      }
  };


  render(){
    return(
      <form class="wardrobe0" onSubmit={this.onSubmit}>
        <h3>Select which of these you already own</h3>
        <p>Don't worry about perfect matches, so long as you have something that is similar.</p>
        <img src={BlackTShirt} alt="Black T Shirt" name="BlackTShirt" onClick={this.imageClick} className={this.state[this.name] ? 'active' : null}/>
        <img src={BlueTShirt} alt="Blue T Shirt" name="BlueTShirt" onClick={this.imageClick}/>
        <img src={WhiteTShirt} alt="White T Shirt" name="WhiteTShirt" onClick={this.imageClick}/>
        <img src={BluePolo} alt="Blue Polo" name="BluePolo" onClick={this.imageClick}/>
        <img src={BlueChambrayShirt} alt="Blue Chambray Shirt" name="BlueChambrayShirt" onClick={this.imageClick}/>
        <img src={WhiteShirt} alt="White Shirt" name="WhiteShirt" onClick={this.imageClick}/>
        <img src={BlueShirt} alt="Blue Shirt" name="BlueShirt" onClick={this.imageClick}/>
        <img src={GreySweater} alt="Grey Sweater" name="GreySweater" onClick={this.imageClick}/>
        <img src={GreyTrousers} alt="Grey Trousers" name="GreyTrousers" onClick={this.imageClick}/>
        <img src={BlueJeans} alt="Blue Jeans" name="BlueJeans" onClick={this.imageClick}/>
        <img src={KhakiChinos} alt="Khaki Chinos" name="KhakiChinos" onClick={this.imageClick}/>
        <img src={BlueBlazer} alt="Blue Blazer" name="BlueBlazer" onClick={this.imageClick}/>
        <img src={BlackCafeRacerJacket} alt="Black Cafe Racer" name="BlackCafeRacerJacket" onClick={this.imageClick}/>
        <img src={BlackBoots} alt="Black Boots" name="BlackBoots" onClick={this.imageClick}/>
        <img src={WhiteSneakers} alt="White Sneakers" name="WhiteSneakers" onClick={this.imageClick}/>
        <button>Next Page...</button>
      </form>
    )
  }
}

export default WardrobeZeroForm;
