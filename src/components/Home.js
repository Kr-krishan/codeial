import React, { Component } from 'react';
import { PostsList } from './index';
import FriendList from './FriendList';

class Home extends Component {
  render() {
    const { posts, friends, isLoggedIn } = this.props;
    console.log('props', this.props);
    return (
      <div className="home">
        <PostsList posts={posts} />
        {/* <FriendList friends={friends} /> */}
        {isLoggedIn && <FriendList friends={friends} />}
      </div>
    );
  }
}

export default Home;
