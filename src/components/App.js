import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { PostsList, Navbar } from './index';
import propTypes from 'prop-types';

class App extends React.Component {

  // to fetch all the posts from api
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    // console.log('props', this.props);
    const { posts } = this.props;
    return (
      <div>
        <Navbar />
        <PostsList posts={posts} />
      </div>
    );
  }
}

// to send in props, the things we require from store
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

// to match the type of prop required
App.propTypes = {
  posts: propTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
