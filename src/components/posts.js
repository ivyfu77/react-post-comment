import React, { Component } from 'react';
import Post from './post';
import { connect } from "react-redux";

class Posts extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.map((post) => (
      <Post key={ post.id } post={ post } />
    ));
    return (
      <div className="">
        <h3>Post List</h3>
        {postList}
      </div>
    );
  }
}

export default connect()(Posts);
