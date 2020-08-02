import React, { Component } from 'react';
import fire from '../config/fire';
import Login from './Login';
import Signup from './Signup';
import Wardrobes from './Wardrobes';
import Home from './Home'
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
      user : {}
    }
  }

  logout(){
    fire.auth().signOut();
  }

  componentDidMount(){
    this.authListener();
  }

  handleChange(event){
    console.log(event)
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  login(event){
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) =>{
      console.log(user)
    }).catch((err)=>{
      console.log(err)
    })
  }

  signup(event){
    event.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
      console.log(user)
    }).catch((err)=>{
      console.log(err);
    })
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }

  signup(event){
    event.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
      console.log(user)
    }).catch((err)=>{
      console.log(err);
    })
  }


  render(){
    return (
      <div className="App">
        <Router>
          <div>
          <ul>
            {this.state.user
            ?
            <li>
              <Link to="/">Home</Link>
            </li>
            :
            <div>
              <li>
              <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </div>}
            <li>
              <Link to="/wardrobes">Wardrobes</Link>
            </li>
          </ul>

            <Switch>
              <Route path="/signup">
                <Signup signup={this.signup} authListener={this.authListener} componentDidMount={this.componentDidMount} handleChange={this.handleChange}/>
              </Route>
              <Route path="/login">
                <Login login={this.login}/>
              </Route>
              <Route path="/wardrobes">
                <Wardrobes />
              </Route>
              <Route path="/">
                <Home logout={this.logout}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
