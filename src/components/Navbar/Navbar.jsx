import React, { Component, useState } from 'react';
import "../../styles/components/_navbar.scss";
import Logo from "../../assets/icon/logo.svg";

class Navbar extends Component{
    state={clicked: false};

    handleClick = () => {
      this.setState({clicked: !this.state.clicked})
    }

    render(){
      return (
        <nav>
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          <div className="">
            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li><a className='active' href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Skills</a></li>
              <li><a href="">Projects</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </nav>
      );
    };
  }

  export default Navbar;