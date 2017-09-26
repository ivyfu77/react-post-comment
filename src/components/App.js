import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchPosts } from '../actions';
import Header from './header';
import NavSide from './navside';
import Posts from './posts';

class App extends Component {

  componentWillMount() {
    const { fetchAllPosts } = this.props;

    fetchAllPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="App">
        <Header />
        <div className="app-container">
          <NavSide />
          <div className="app-contnent">
            <Switch>
              <Route exact path="/" render={ () => (
                <Posts posts={posts} />
              )} />
              <Route exact path="/react" render={ () => (
                <h3>React Posts</h3>
              )} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return ({
    posts: state.postStore.posts
  })
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
