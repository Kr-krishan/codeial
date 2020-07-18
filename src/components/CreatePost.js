import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/posts';
import { clearAuthState } from '../actions/auth';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  componentWillUnmount = () => {
    this.props.dispatch(clearAuthState());
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleAddPost = () => {
    this.props.dispatch(createPost(this.state.content));
  };
  render() {
    return (
      <div className="create-post">
        <textarea
          className="add-post"
          value={this.state.content}
          onChange={this.handleChange}
        />

        <div>
          <button id="add-post-btn" onClick={this.handleAddPost}>
            Add Post
          </button>
        </div>
      </div>
    );
  }
}

// to get only dispatch from store
export default connect()(CreatePost);
