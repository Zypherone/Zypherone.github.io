import React, { Component } from 'react';
import Header from 'components/Header';
import Section from 'components/Section';
import Footer from 'components/Footer';
//import $ from "jquery" ( window );
import './App.css';
import * as firebase from "firebase/app";
import 'firebase/database'

class App extends Component {

  /*
  constructor() {
    super()
    this.state = {
      speed: 10  
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react')
    const speedRef = rootRef.child('speed')

    alert(speedRef)

    speedRef.on('value', snap => {
      
      this.setState({
        speed: snap.val()
      })
    })
  }
  */

  render() {
    return (
      <div id="outer-container">
        <div id="inner-container">
          <Header />
          <Section />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
