import React, { Component } from 'react';
import logo from '../images/ivy-logo.png';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h2>&nbsp;&nbsp;My Posts</h2>
      </div>
    );
  }
}

export default Header;