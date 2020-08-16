import React, { Component } from 'react';
import fire, { db, currentUser } from '../config/fire';
import Login from './Login';
import Signup from './Signup';
import Wardrobes from './Wardrobes';
import Home from './Home'
import DressingRoom from './DressingRoom';
import PersonalInfoForm from './PersonalInfoForm';
import WardrobeZeroForm from './WardrobeZeroForm';
import { filteredWardrobe } from './Helpers/clothes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



class App extends Component {
  constructor(){
    super();
    this.state={
      user : {},
      userDetails: {},
    }

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.signup = this.signup.bind(this)
    this.authListener = this.authListener.bind(this)
    this.updateUserState = this.updateUserState.bind(this)
  }

  logout(){
    fire.auth().signOut();
    this.setState({
      user: {},
      userDetails: {}
    })
  }

  componentDidMount(){
    this.authListener();
  }

  async login(email, password){
    await fire.auth().signInWithEmailAndPassword(email, password)
    this.updateUserState();
  };

  async updateUserState(){
    const user = await currentUser();
    if (user){
      db
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc){
            this.setState({
              userDetails: doc.data(),
              filteredClothes: filteredWardrobe(doc.data().wardrobeZero)
            })
          }
        }).catch(function(error){
          console.log("error getting document:", error);
        })
    }
  }

  async signup(email, password){
    await fire.auth().createUserWithEmailAndPassword(email, password)
    const user = await currentUser();
    if (user){
      db
        .collection("users")
        .doc(user.uid)
        .set({
          email: user.email,
        })
      }
    }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user})
        db
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc){
              this.setState({
                userDetails: doc.data(),
                filteredClothes: filteredWardrobe(doc.data().wardrobeZero)
              })
            }
          }).catch(function(error){
            console.log("error getting document:", error);
          })
      }
      else{
        this.setState({user:null})
      }
    })
  }

  render(){
    return (
      <div className="App">
        <Router>
          <div>
            <ul className="navbar">
              <div className="navbar">
                <Link className="title" to="/">SARTORIAL</Link>
              </div>
            </ul>
          <ul className="navbar">
            {this.state.user
            ?
            <div className="navbar">
              <Link onClick={this.logout} to="/">Logout {this.state.userDetails["First Name"]}</Link>
              <Link to="/">Home </Link>
              <Link className="title" to="/">SARTORIAL</Link>
              <Link to="/dressingroom">Dressing Room</Link>
              <Link to="/wardrobes">Wardrobes</Link>
            </div>
            :
            <div>
            </div>}
          </ul>

            <Switch>
              {this.state.user
              ?
              <div>
                <Route exact path="/">
                  <Home
                    logout={this.logout}
                    user={this.state.user}
                    userDetails={this.state.userDetails}
                    filteredClothes={this.state.filteredClothes}
                  />
                </Route>
                <Route path="/wardrobes">
                  <Wardrobes />
                </Route>
                <Route path="/dressingroom">
                  <DressingRoom filteredClothes={this.state.filteredClothes} userDetails={this.state.userDetails}/>
                </Route>
                <Route path="/details" component={(props) => (
                  <PersonalInfoForm signup={this.signup} {...props} authListener={this.authListener} componentDidMount={this.componentDidMount}/>
                )}/>
                <Route path="/clothes" component={(props) => (
                  <WardrobeZeroForm signup={this.signup} {...props} authListener={this.authListener} updateUserState={this.updateUserState}/>
                )}/>
              </div>
              :
              <div>
                <Route path="/signup" component={(props) => (
                  <Signup signup={this.signup} {...props} authListener={this.authListener} componentDidMount={this.componentDidMount}/>
                )}/>
                <Route path="/login" component={(props) => (
                  <Login login={this.login} {...props}/>
                )}/>
                <Route path="/wardrobes">
                  <Wardrobes />
                </Route>
                <Route exact path="/">
                  <Home
                    logout={this.logout}
                    user={this.state.user}
                    userDetails={this.state.userDetails}
                  />
                </Route>
              </div>
              }
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
