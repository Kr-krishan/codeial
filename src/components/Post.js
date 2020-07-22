import { Comment } from './index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createComment, addLikes } from '../actions/posts';
import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleKeyDown = (e) => {
    const { post } = this.props;
    const { comment } = this.state;
    // console.log('postId', postId);
    if (e.key === 'Enter') {
      // console.log('comment', e.target.value);
      //   const content = e.target.value;
      this.props.dispatch(createComment(comment, post._id));
      this.setState({
        comment: '',
      });
    }
  };

  handleAddLike = () => {
    const { post, user } = this.props;
    this.props.dispatch(addLikes(post._id, 'Post', user._id));
  };

  render() {
    const { post, user } = this.props;
    const isPostLikedByUser = post.likes.includes(user._id);

    return (
      <div className="post-wrapper" key={post._id}>
        <div className="post-header">
          <div className="post-avatar">
            <Link to={`/user/${post.user._id}`}>
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-pic"
              />
            </Link>
            <div>
              <span className="post-author">{post.user.name}</span>
              <span className="post-time">a minute ago</span>
            </div>
          </div>
          <div className="post-content">{post.content}</div>

          <div className="post-actions">
            <button className="post-like no-btn" onClick={this.handleAddLike}>
              {isPostLikedByUser ? (
                <img
                  src="https://image.flaticon.com/icons/svg/1076/1076984.svg"
                  alt="like post"
                />
              ) : (
                <img
                  src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                  alt="likes-icon"
                />
              )}
              <span>{post.likes.length}</span>
            </button>

            <div className="post-comments-icon">
              <img
                src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                alt="comments-icon"
              />
              <span>{post.comments.length}</span>
            </div>
          </div>
          <div className="post-comment-box">
            <input
              placeholder="Start typing a comment"
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              value={this.state.comment}
            />
          </div>

          <div className="post-comments-list">
            {post.comments.map((comment) => (
              <Comment postId={post._id} comment={comment} key={comment._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
  };
}

export default connect(mapStateToProps)(Post);
