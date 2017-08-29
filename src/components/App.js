import React, { Component } from 'react';
import Header from './header';
import NavSide from './navside';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-container">
          <NavSide />
          <p className="app-contnent">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
