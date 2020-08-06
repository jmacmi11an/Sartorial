import React, { Component } from 'react';
import fire, { db, currentUser } from '../config/fire';
import Login from './Login';
import Signup from './Signup';
import Wardrobes from './Wardrobes';
import Home from './Home'
import DressingRoom from './DressingRoom';
import { filteredWardrobe } from './Helpers/clothes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
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
  }

  logout(){
    fire.auth().signOut();
  }

  componentDidMount(){
    this.authListener();
  }

  async login(email, password){
    await fire.auth().signInWithEmailAndPassword(email, password)
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
            console.log("document data:", doc.data() );
          }
        }).catch(function(error){
          console.log("error getting document:", error);
        })
    }
  };

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
              console.log("document data:", doc.data() );
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
          <h1>Sar<span>t</span>orial</h1>
          <h4>Welcome {(this.state.userDetails["First Name"]) ? this.state.userDetails["First Name"] :null} </h4>
          <ul className="navbar">
            {this.state.user
            ?
            <div>
              <li>
                <Link onClick={this.logout} to="/">Logout</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dressingroom">Dressing Room</Link>
              </li>
              <li>
                <Link to="/wardrobes">Wardrobes</Link>
              </li>
            </div>
            :
            <div>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/wardrobes">Wardrobes</Link>
              </li>
            </div>}
          </ul>

            <Switch>
              {this.state.user
              ?
              <div>
                <Route exact path="/">
                  <Home logout={this.logout}/>
                </Route>
                <Route path="/wardrobes">
                  <Wardrobes />
                </Route>
                <Route path="/dressingroom">
                  <DressingRoom filteredClothes={this.state.filteredClothes} userDetails={this.state.userDetails}/>
                </Route>
              </div>
              :
              <div>
                <Route path="/signup">
                  <Signup signup={this.signup} authListener={this.authListener} componentDidMount={this.componentDidMount}/>
                </Route>
                <Route path="/login">
                  <Login login={this.login}/>
                </Route>
                <Route path="/wardrobes">
                  <Wardrobes />
                </Route>
                <Route exact path="/">
                  <Home logout={this.logout} user={this.state.user}/>
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
