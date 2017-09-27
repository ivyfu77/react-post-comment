import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchPosts, fetchCategories } from '../actions';
import Header from './header';
import NavSide from './navside';
import Posts from './posts';
import { generateUuid } from '../utils/lib';

class App extends Component {

  componentWillMount() {
    const { fetchAllPosts, fetchAllCategories } = this.props;

    fetchAllPosts();
    fetchAllCategories();

    console.log(generateUuid());
  }

  render() {
    const { posts, categories } = this.props;

    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-container">
          <NavSide categories={categories} />
          <div className="app-contnent">
            <Route exact path="/" render={ () => (
              <Posts posts={posts} />
            )} />
            {categories.map( (category) => (
              <Route key={category.name} path={"/"+category.path} render={ () => (
                <Posts posts={ posts.filter((post) => (post.category === category.name)) } />
              )} />
            ))}
          </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return ({
    posts: state.postStore.posts,
    categories: state.categoryStore.categories
  })
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllPosts: () => dispatch(fetchPosts()),
    fetchAllCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
