import React, { Component, useState } from 'react';
import "../../styles/components/_navbar.scss";
import Logo from "../../assets/icon/logo.svg";
import { Link } from 'react-scroll';

class Navbar extends Component{
    state = { clicked: false, prevScrollY: 0, isHidden: false, isSlidingIn: true };

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
      const { prevScrollY, isSlidingIn } = this.state;
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        this.setState({ isHidden: true, isSlidingIn: false });
      } else {
        this.setState({ isHidden: false, isSlidingIn: true });
      }

      this.setState({ prevScrollY: currentScrollY });
    };  

    handleClick = () => {
      this.setState({clicked: !this.state.clicked})
    }

    handleMenuItemClick = () => {
      this.setState({ clicked: false });
    };

    render(){
      const { clicked, isHidden, isSlidingIn } = this.state;
      const iconClass = clicked ? 'times' : 'bars';

      return (
        <nav className={`${isHidden ? 'hidden' : ''} ${isSlidingIn ? 'sliding-in' : ''}`}>
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          <div className="">
            <ul id='navbar' className={clicked ? "#navbar active" : "#navbar"}>
              <li>
                <a href="">
                  <Link to="landing" spy={true} smooth={true} offset={-50} duration={500} onClick={this.handleMenuItemClick}>
                    Home
                  </Link> 
                </a>
              </li>
              <li>
                <a href="">
                  <Link to="about" spy={true} smooth={true} offset={0} duration={500} onClick={this.handleMenuItemClick}>
                    About
                  </Link> 
                </a>
              </li>
              <li>
                <a href="">
                  <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={this.handleMenuItemClick}>
                    Skills
                  </Link> 
                </a>
              </li>
              <li>
                <a href="">
                  <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} onClick={this.handleMenuItemClick}>
                    Projects
                  </Link> 
                </a>
              </li>
              <li>
                <a href="">
                  <Link to="experience" spy={true} smooth={true} offset={-50} duration={500} onClick={this.handleMenuItemClick}>
                    Experiences
                  </Link>
                </a>
              </li>
              <li>
                <a href="">
                  <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={this.handleMenuItemClick}>
                    Contact
                  </Link> 
                </a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i id='bar' className={`fas fa-${iconClass}`}></i>
          </div>
        </nav>
      );
    };
  }

  export default Navbar;