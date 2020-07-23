import React from 'react';
import { connect } from 'react-redux';
import { addLikes, addPost } from '../actions/posts';

class Comment extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handleAddCommentLike = () => {
    const { comment, user, postId } = this.props;
    this.props.dispatch(addLikes(comment._id, 'Comment', user._id, postId));
  };
  render() {
    const { comment } = this.props;
    return (
      <div className="post-comment-item">
        <div className="post-comment-header">
          <span className="post-comment-author">{comment.user.name}</span>
          <span className="post-comment-time">{comment.createdAt}</span>
          <span className="post-comment-likes">
            {comment.likes.length}
            <button className=" no-btn" onClick={this.handleAddCommentLike}>
              likes
            </button>
          </span>
        </div>

        <div className="post-comment-content">{comment.content}</div>
      </div>
    );
  }
}

// function Comment(props) {
//   const comment = props.comment;
//   //   const postId = props.postId;
//   return (
//     <div className="post-comment-item">
//       <div className="post-comment-header">
//         <span className="post-comment-author">{comment.user.name}</span>
//         <span className="post-comment-time">{comment.createdAt}</span>
//         <span className="post-comment-likes">
//           {comment.likes.length}
//           <button className="no-btn" onClick={this.handleAddLike}>likes</button>
//         </span>
//       </div>

//       <div className="post-comment-content">{comment.content}</div>
//     </div>
//   );
// }

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
  };
}

export default connect(mapStateToProps)(Comment);
