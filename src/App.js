import React, { Component } from 'react';
import './App.css';
import $ from "jquery";

/* Import Components */
import FrontPage from './components/FrontPage';
import Services from './components/Servcies';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

/* Import Logo */
import CWTLogoWhite from "./Assets/brand/cwtLogoWhite.png"
import CWTLogoBlue from "./Assets/brand/cwtLogoBlue.png"

/* Main App Class */
class App extends Component {

  constructor() {
    super();

    this.state = {
      currentScrollPosition: 0,
      navBarBgColor: {
        backgroundColor: 'steelblue'
      }
    }

    $(document).on('scroll', () => {
      
      if ($(document).scrollTop() < $(window).height()) {
        this.setState({
          navBarBgColor: {
            backgroundColor: 'steelblue'
          }
        })
      }
      else if ($(window).width() <= 575 ? $(document).scrollTop() >= $(window).height() && $(document).scrollTop() < $(window).height() * 4 : $(document).scrollTop() >= $(window).height() && $(document).scrollTop() < $(window).height() * 2) {
        this.setState({
          navBarBgColor: {
            backgroundColor: 'darkgray'
          }
        })
      }
      else if ($(window).width() <= 575 ? $(document).scrollTop() >= $(window).height() * 4 && $(document).scrollTop() < $(window).height() * 5 : $(document).scrollTop() >= $(window).height() * 2 && $(document).scrollTop() < $(window).height() * 3) {
        this.setState({
          navBarBgColor: {
            backgroundColor: 'lightcoral'
          }
        })
      }
      else if ($(window).width() <= 575 ? $(document).scrollTop() === $(window).height() * 5 : $(document).scrollTop() === $(window).height() * 3) {
        this.setState({
          navBarBgColor: {
            backgroundColor: 'white'
          }
        })
      }

      this.setState({
        currentScrollPosition: $(document).scrollTop()
      })
    })
  }

  handleOnClick(compName) {

    let windowHeight = $(window).height();

    let scrollBottom = $(document).scrollTop() + windowHeight;

    if(compName === 'home') {
      
      $('body, html').animate({ scrollTop: 0 }, 1000);
      this.setState({
        navBarBgColor: {
          backgroundColor: 'steelblue'
        }
      })
    }
    else if(compName === 'services') {
      if (scrollBottom === windowHeight*2) {
        return false
      }
      else {
        $('body, html').animate({ scrollTop: windowHeight }, 1000);
        this.setState({
          navBarBgColor: {
            backgroundColor: 'darkgray'
          }
        })
      }
    }
    else if (compName === 'about') {
      if ($(window).width() <=575 ? scrollBottom === windowHeight*4 : scrollBottom === windowHeight * 3) {
        return false
      }
      else {
        $('body, html').animate($(window).width() <= 575 ? { scrollTop: windowHeight * 4 } : { scrollTop: windowHeight*2 }, 1000);
        this.setState({
          navBarBgColor: {
            backgroundColor: 'lightcoral'
          }
        })
      }
    }
    else if (compName === 'contact') {
      if ($(window).width() <= 575 ? scrollBottom === windowHeight*4 : scrollBottom === windowHeight * 4) {
        return false
      }
      else {
        $('body, html').animate($(window).width() <= 575 ? { scrollTop: windowHeight * 5 } : { scrollTop: windowHeight*3 }, 1000);
        this.setState({
          navBarBgColor: {
            backgroundColor: 'white'
          }
        })
      }
    }

  }

  render() {

    return (
      <div id="main" className="container-fluid">
        <div className="navbarContainer" style={this.state.navBarBgColor}>
          <div id="logoContainer">
            <img src={$(window).width() <= 575 ? this.state.currentScrollPosition === $(window).height() * 5 ? CWTLogoBlue : CWTLogoWhite : this.state.currentScrollPosition === $(window).height() * 3 ? CWTLogoBlue : CWTLogoWhite} width="45px" height="45px" onClick={() => $('body, html').animate({ scrollTop: 0 }, 1000)} alt="Logo" />
            <h3 style={$(window).width() <= 575 ? this.state.currentScrollPosition === $(window).height() * 5 ? { color: 'steelblue' } : null : this.state.currentScrollPosition === $(window).height() * 3 ? { color: 'steelblue' } : null}>Classic World Travel</h3>
          </div>
          <ul id="navbar">
            <li id="home" onClick={this.handleOnClick.bind(this, "home")} className={this.state.currentScrollPosition < $(window).height() ? "active" : ""} style={$(window).width() <= 575 ? this.state.currentScrollPosition === $(window).height() * 5 ? { color: 'steelblue' } : null : this.state.currentScrollPosition === $(window).height() * 3 ? { color: 'steelblue' } : null}>Home</li>
            <li id="services" onClick={this.handleOnClick.bind(this, "services")} className={$(window).width() <= 575 ? this.state.currentScrollPosition >= $(window).height() && this.state.currentScrollPosition < $(window).height() * 4 ? "active" : "" : this.state.currentScrollPosition >= $(window).height() && this.state.currentScrollPosition < $(window).height() * 2 ? "active" : ""} style={$(window).width() <= 575 ? this.state.currentScrollPosition === $(window).height() * 5 ? { color: 'steelblue' } : null : this.state.currentScrollPosition === $(window).height() * 3 ? { color: 'steelblue' } : null}>Services</li>
            <li id="about" onClick={this.handleOnClick.bind(this, "about")} className={$(window).width() <= 575 ? this.state.currentScrollPosition >= $(window).height() * 4 && this.state.currentScrollPosition < $(window).height() * 5 ? "active" : "" : this.state.currentScrollPosition >= $(window).height() * 2 && this.state.currentScrollPosition < $(window).height() * 3 ? "active" : ""} style={$(window).width() <= 575 ? this.state.currentScrollPosition === $(window).height() * 5 ? { color: 'steelblue' } : null : this.state.currentScrollPosition === $(window).height() * 3 ? { color: 'steelblue' } : null}>About Us</li>
            <li id="contact" onClick={this.handleOnClick.bind(this, "contact")} className={$(window).width() <= 575 ? this.state.currentScrollPosition === $(window).height() * 5 ? "active" : "" : this.state.currentScrollPosition === $(window).height() * 3 ? "active" : ""} style={$(window).width() <= 575 ? this.state.currentScrollPosition === $(window).height() * 5 ? { color: 'steelblue' } : null : this.state.currentScrollPosition === $(window).height() * 3 ? { color: 'steelblue' } : null}>Contact Us</li>
          </ul>
        </div>
        <FrontPage />
        <Services />
        <AboutUs />
        <ContactUs />
      </div>
    );
  }
}

export default App;