import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post-item">
        <h4>{ post.title }</h4>
      </div>
    );
  }
}

export default Post;