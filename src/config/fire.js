import * as firebase from 'firebase';
// import 'firebase/db';


const firebaseConfig = {
  apiKey: "AIzaSyDMLheCpXqXHJmoEIi2CFkDBWajFIhShRc",
  authDomain: "sartorial-5c2a4.firebaseapp.com",
  databaseURL: "https://sartorial-5c2a4.firebaseio.com",
  projectId: "sartorial-5c2a4",
  storageBucket: "sartorial-5c2a4.appspot.com",
  messagingSenderId: "953304842862",
  appId: "1:953304842862:web:51adc2c273b19aa2f5dc7f",
  measurementId: "G-9FX8T8V0HX"
};

const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.database()
// import {storage} from './fire'

export {db, fire as default};
