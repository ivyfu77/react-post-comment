import React, { Component } from 'react';
import Post from './post';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Posts extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.map((post) => (
      <Post key={ post.id } post={ post } />
    ));
    return (
      <div className="posts-list">
        <h2 className="posts-title">
          <i className="fa fa-thumb-tack post-pin" aria-hidden="true"></i>
          <span>Posts</span>
          <Link to='/add-post'><i className="fa fa-plus post-add-icon" aria-hidden="true"></i></Link>
        </h2>
        {postList}
      </div>
    );
  }
}

export default connect()(Posts);
