import React, { Component } from 'react';

class Posts extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.map((post) => (
      <div>
        { post.title }
      </div>
    ));
    return (
      <div className="">
        <h3>Post List</h3>
        {postList}
      </div>
    );
  }
}

export default Posts;