import React, { Component } from 'react';
import './../App.css';
import BackgroundImage from "./../Assets/animatedHeader.gif"

export default class FrontPage extends Component {

  render() {

    return (
      <div id="frontPageContainer">
        <div id="opacContainer">
          <img src={BackgroundImage} alt="Animated Background" />
        </div>
        
        <div id="frontPageHeadingContainer">
          <div id="largeHeading">
            <h1 id="heading">CLASSIC <br /> WORLD <br /> TRAVEL</h1>
          </div>
        </div>

      </div>
    )
  }
}