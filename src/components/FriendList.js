import React from 'react';
import FriendListItem from './FriendListItem';

class FriendList extends React.Component {
  render() {
    const { friends } = this.props;
    return (
      <div className="friends-list">
        <div className="header">Friends</div>

        {friends && friends.length === 0 && (
          <div className="no-friends">No friends found!</div>
        )}

        {friends &&
          friends.map((friend) => (
            <FriendListItem friend={friend.to_user} key={friend._id} />
          ))}
      </div>
    );
  }
}

export default FriendList;
