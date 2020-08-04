import React, { Component } from 'react';
import fire from '../config/fire';
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



class WardrobeZeroForm extends Component{
  constructor(){
    super()
    this.state = {
      wardrobeZero : {
        "BlackTShirt" : {"own": false, "category": "top", "season": "any"},
        "BlueTShirt" : {"own": false, "category": "top"},
        "WhiteTShirt" : {"own": false, "category": "top"},
        "BluePolo" : {"own": false, "category": "top"},
        "BlueChambrayShirt" : {"own": false, "category": "top"},
        "WhiteShirt" : {"own": false, "category": "top"},
        "BlueShirt" : {"own": false},
        "GreySweater" : {"own": false},
        "GreyTrousers" : {"own": false},
        "BlueJeans" : {"own": false},
        "KhakiChinos" : {"own": false},
        "BlueBlazer" : {"own": false},
        "BlackCafeRacerJacket" : {"own": false},
        "BlackBoots" : {"own": false},
        "WhiteSneakers" : {"own": false}
      }
    }
  }

  imageClick = (image) => {
    let item = image.target.name
    console.log(fire.storage(), fire.database())
    console.log(image.target.name)
    this.setState({
      // wardrobeZero.[item].own = true
    })
  }

  render(){
    return(
      <form class="wardrobe0">
        <label>First Name</label>
        <input
        type="text"
        name="first name"
        id="first name"
        placeholder="John"
        // onChange={this.handleChange}
        // value={this.state.email}
        />
        <label>Last Name</label>
        <input
        name="last name"
        type="last name"
        onChange={this.handleChange}
        id="last name"
        placeholder="Doe"
        // value={this.state.password}
        />
        <label>Date of Birth</label>
        <input
        name="last name"
        type="date"
        onChange={this.handleChange}
        id="last name"
        placeholder="01/01/2000"
        // value={this.state.password}
        />
        <h3>Select which of these you already own</h3>
        <p>Don't worry about perfect matches, so long as you have something that is similar.</p>
        <img src={BlackTShirt} alt="Black T Shirt" name="BlackTShirt" onClick={this.imageClick}/>
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
