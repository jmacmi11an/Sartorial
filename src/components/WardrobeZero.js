import React, { Component } from 'react';
import './WardrobeZero.css';
import BlackCafeRacerJacket from '../images/BlackCafeRacerJacket.jpg';
import BlackBoots from '../images/BlackBoots.jpg';
import BlackTShirt from '../images/BlackTShirt.jpg';
import BlueBlazer from '../images/BlueBlazer.jpg';
import BlueChambrayShirt from '../images/BlueChambrayShirt.jpg';
import BlueJeans from '../images/BlueJeans.jpg';
import BluePolo from '../images/BluePolo.jpg';
import BlueShirt from '../images/BlueShirt.jpg';
import BlueTShirt from '../images/BlueTShirt.jpg';
import GreySweater from '../images/GreySweater.jpg';
import GreyTrousers from '../images/GreyTrousers.jpg';
import KhakiChinos from '../images/KhakiChinos.jpg';
import WhiteShirt from '../images/WhiteShirt.jpg';
import WhiteSneakers from '../images/WhiteSneakers.jpg';
import WhiteTShirt from '../images/WhiteTShirt.jpg';



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
