import React, { Component } from 'react';
import Header from './header';
import NavSide from './navside';
import { fetchData } from '../utils/api';
import Posts from './posts';

class App extends Component {

  state = {
    posts: []
  }

  componentWillMount() {
    fetchData('posts')
      .then((data) => {
        this.setState({ posts: data })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-container">
          <NavSide />
          <div className="app-contnent">
            <Posts posts={this.state.posts} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
