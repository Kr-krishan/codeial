import React, { Component } from 'react';
import propTypes from 'prop-types';
import { CreatePost } from './index';
import { connect } from 'react-redux';
import { Post } from './index';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    console.log('post ', this.props);
    return (
      <div className="posts-list">
        <CreatePost />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

// to match the type of prop required
PostsList.propTypes = {
  posts: propTypes.array.isRequired,
};

export default connect(mapStateToProps)(PostsList);
