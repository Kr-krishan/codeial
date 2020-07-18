import React from 'react';
import { connect } from 'react-redux';
import { fetchUserProfile } from '../actions/profile';
import { APIUrls } from '../helper/urls';
import { getAuthTokenFromLocalStorage } from '../helper/utils';
import { addFriends } from '../actions/friends';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      error: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;

    if (match.params.userId) {
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }

  checkFriendOfUser = () => {
    // console.log('check friend', this.props);
    const { friends } = this.props;
    // console.log('friends', friends);
    const userId = this.props.match.params.userId;
    // console.log('userId', userId);

    const index = friends.map((friend) => friend.to_user._id).indexOf(userId);
    // console.log('index', index);

    if (index !== -1) {
      return true;
    }
    return false;
  };

  handleAddFriend = async () => {
    const userId = this.props.match.params.userId;

    const url = APIUrls.addFriend(userId);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.success) {
      console.log('add friends', data);
      this.setState({
        success: true,
      });
      this.props.dispatch(addFriends(data.data.friendship));
    } else {
      this.setState({
        success: null,
        error: data.message,
      });
    }
  };

  handleRemoveFriend = () => {};

  render() {
    const {
      match: { params },
      profile,
    } = this.props;
    const { user } = profile;

    console.log('userProfile', this.props);
    console.log('userProfile props', params);

    const { success, error } = this.state;
    const isFriendOfUser = this.checkFriendOfUser();

    if (profile.inProgress) {
      return <h1>Loading!</h1>;
    }

    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        {success && (
          <div className="alert success-dailog">Friend Added successfully</div>
        )}
        {error && <div className="alert error-dailog">{error}</div>}

        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{user.name}</div>
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="btn-grp">
          {!isFriendOfUser && (
            <button className="button save-btn" onClick={this.handleAddFriend}>
              Add Friend
            </button>
          )}
          {isFriendOfUser && (
            <button
              className="button save-btn"
              onClick={this.handleRemoveFriend}
            >
              Remove Friend
            </button>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ profile, friends }) {
  return {
    profile,
    friends,
  };
}
export default connect(mapStateToProps)(UserProfile);
