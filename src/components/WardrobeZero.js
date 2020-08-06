import React, { Component } from 'react';
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
import CamelSweater from '../images/camelsweater.jpg';




class WardrobeZero extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="wardrobe0">
        <img src={BlackTShirt} alt="Black T Shirt" />
        <img src={BlueTShirt} alt="Blue T Shirt" />
        <img src={WhiteTShirt} alt="White T Shirt" />
        <img src={BluePolo} alt="Blue Polo" />
        <img src={BlueChambrayShirt} alt="Blue Chambray Shirt" />
        <img src={WhiteShirt} alt="White Shirt" />
        <img src={BlueShirt} alt="Blue Shirt" />
        <img src={GreySweater} alt="Grey Sweater" />
        <img src={CamelSweater} alt="Camel Sweater" />
        <img src={GreyTrousers} alt="Grey Trousers" />
        <img src={BlueJeans} alt="Blue Jeans" />
        <img src={KhakiChinos} alt="Khaki Chinos" />
        <img src={BlueBlazer} alt="Blue Blazer" />
        <img src={BlackCafeRacerJacket} alt="Black Cafe Racer" />
        <img src={BlackBoots} alt="Black Boots" />
        <img src={WhiteSneakers} alt="White Sneakers" />
      </div>
    )
  }
}

export default WardrobeZero;
