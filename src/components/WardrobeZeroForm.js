import React, { Component } from 'react';
import { db, currentUser } from '../config/fire';
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
        <img src={BlackTShirt} alt="Black T Shirt" name="BlackTShirt" onClick={this.imageClick} className={this.state["BlackTShirt"] ? "active" : null}/>
        <img src={BlueTShirt} alt="Blue T Shirt" name="BlueTShirt" onClick={this.imageClick} className={this.state["BlueTShirt"] ? "active" : null}/>
        <img src={WhiteTShirt} alt="White T Shirt" name="WhiteTShirt" onClick={this.imageClick} className={this.state["WhiteTShirt"] ? "active" : null}/>
        <img src={BluePolo} alt="Blue Polo" name="BluePolo" onClick={this.imageClick} className={this.state["BluePolo"] ? "active" : null}/>
        <img src={BlueChambrayShirt} alt="Blue Chambray Shirt" name="BlueChambrayShirt" onClick={this.imageClick} className={this.state["BlueChambrayShirt"] ? "active" : null}/>
        <img src={WhiteShirt} alt="White Shirt" name="WhiteShirt" onClick={this.imageClick} className={this.state["WhiteShirt"] ? "active" : null}/>
        <img src={BlueShirt} alt="Blue Shirt" name="BlueShirt" onClick={this.imageClick} className={this.state["BlueShirt"] ? "active" : null}/>
        <img src={GreySweater} alt="Grey Sweater" name="GreySweater" onClick={this.imageClick} className={this.state["GreySweater"] ? "active" : null}/>
        <img src={CamelSweater} alt="Camel Sweater" name="CamelSweater" onClick={this.imageClick} className={this.state["CamelSweater"] ? "active" : null}/>
        <img src={GreyTrousers} alt="Grey Trousers" name="GreyTrousers" onClick={this.imageClick} className={this.state["GreyTrousers"] ? "active" : null}/>
        <img src={BlueJeans} alt="Blue Jeans" name="BlueJeans" onClick={this.imageClick} className={this.state["BlueJeans"] ? "active" : null}/>
        <img src={KhakiChinos} alt="Khaki Chinos" name="KhakiChinos" onClick={this.imageClick} className={this.state["KhakiChinos"] ? "active" : null}/>
        <img src={BlueBlazer} alt="Blue Blazer" name="BlueBlazer" onClick={this.imageClick} className={this.state["BlueBlazer"] ? "active" : null}/>
        <img src={BlackCafeRacerJacket} alt="Black Cafe Racer" name="BlackCafeRacerJacket" onClick={this.imageClick} className={this.state["BlackCafeRacerJacket"] ? "active" : null}/>
        <img src={BlackBoots} alt="Black Boots" name="BlackBoots" onClick={this.imageClick} className={this.state["BlackBoots"] ? "active" : null}/>
        <img src={WhiteSneakers} alt="White Sneakers" name="WhiteSneakers" onClick={this.imageClick} className={this.state["WhiteSneakers"] ? "active" : null}/>
        <button>Next Page...</button>
        <p></p>
      </form>
    )
  }
}

export default WardrobeZeroForm;
