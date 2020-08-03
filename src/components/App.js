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

  login(email, password){
    fire.auth().signInWithEmailAndPassword(email, password).then((user) =>{
      console.log(user)
    }).catch((err)=>{
      console.log(err)
    })
  }

  signup(email, password){
    fire.auth().createUserWithEmailAndPassword(email, password).then((user) => {
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

  render(){
    return (
      <div className="App">
        <p>this is app.js</p>
        <Router>
          <div>
          <ul>
            {this.state.user
            ?
            <div>
              <li>
                <Link onClick={this.logout} to="/">Logout</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </div>
            :
            <div>
              <li>
                <Link to="/home">Home</Link>
              </li>
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
              {this.state.user
              ?
              <div>
                <Route path="/home">
                  <Home logout={this.logout}/>
                </Route>
                <Route path="/wardrobes">
                  <Wardrobes />
                </Route>
              </div>
              :
              <div>
                <Route path="/home">
                  <Home logout={this.logout}/>
                </Route>
                <Route path="/signup">
                  <Signup signup={this.signup} authListener={this.authListener} componentDidMount={this.componentDidMount}/>
                </Route>
                <Route path="/login">
                  <Login login={this.login}/>
                </Route>
                <Route path="/wardrobes">
                  <Wardrobes />
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
