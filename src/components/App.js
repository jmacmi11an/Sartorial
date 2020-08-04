import React, { Component } from 'react';
import fire from '../config/fire';
import Login from './Login';
import Signup from './Signup';
import Wardrobes from './Wardrobes';
import Home from './Home'
import DressingRoom from './DressingRoom';
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dressingroom">Dressing Room</Link>
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
            </div>}
            <li>
              <Link to="/wardrobes">Wardrobes</Link>
            </li>
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
                  <DressingRoom />
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
