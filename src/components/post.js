import React, { Component } from 'react';
import { timeToFormatDate } from '../utils/lib';
import { getPostComments } from '../utils/api';
import { Link } from "react-router-dom";

class Post extends Component {
  state = {
    comments: []
  }
  componentWillMount() {
    const { post } = this.props;
    getPostComments(post.id)
                  .then((data) => {
                    this.setState({
                      comments: data
                    });
                  });
  }
  render() {
    const { post } = this.props;
    const { comments } = this.state;
    return (
      <div className="post-item">
        <div className="post-item-content">
          <div className="post-item-first-line">
            <p>{timeToFormatDate(post.timestamp)}</p>
            <div className="vote-score">
              <i className="fa fa-minus" aria-hidden="true"></i>
              <span>{post.voteScore}</span>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <div className="comment-number">{comments.length} comments</div>
          </div>
          <h4>{ post.title }</h4>
          <div className="post-item-bottom">
            <span className="post-author">By {post.author}</span>
            <Link to={"/"+post.category}><span className="post-category">{post.category.toUpperCase()}</span></Link>
          </div>
        </div>
        <div className="post-item-action">
          <i className="fa fa-pencil-square" aria-hidden="true"></i>
          <i className="fa fa-minus-square" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Post;