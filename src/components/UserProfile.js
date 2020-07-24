import React from 'react';
import { connect } from 'react-redux';
import { fetchUserProfile } from '../actions/profile';
import { APIUrls } from '../helper/urls';
import { getAuthTokenFromLocalStorage } from '../helper/utils';
import { addFriends, removeFriends } from '../actions/friends';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      error: null,
      successMsg: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;

    if (match.params.userId) {
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }

  // to open another user profile if a profile is already opened
  componentDidUpdate(prevProps) {
    const {
      match: { params: prevParams },
    } = prevProps;

    const {
      match: { params: currParams },
    } = this.props;

    if (prevParams && currParams && prevParams.userId !== currParams.userId) {
      this.props.dispatch(fetchUserProfile(currParams.userId));
    }
  }

  // check user frnds to show in list
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

  // add a frnd using async await
  handleAddFriend = async () => {
    const userId = this.props.match.params.userId;
    console.log('userId', userId);
    const url = APIUrls.addFriend(userId);
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    };

    const response = await fetch(url, option);
    const data = await response.json();
    console.log('url', url, data);
    if (data.success) {
      console.log('add friends', data);
      this.setState({
        success: true,
        successMsg: 'Added friend Successfully!',
      });
      this.props.dispatch(addFriends(data.data.friendship));
    } else {
      console.log('error in add frnd', data);
      this.setState({
        success: null,
        error: data.message,
      });
    }
  };

  // remove a frnd using async await
  handleRemoveFriend = async () => {
    const userId = this.props.match.params.userId;

    const url = APIUrls.removeFriend(userId);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log('remove frnd', data);

    if (data.success) {
      this.setState({
        success: true,
        successMsg: 'removed friend Successfully',
      });
      this.props.dispatch(removeFriends(userId));
    } else {
      this.setState({
        success: null,
        error: data.message,
      });
    }
  };

  render() {
    const {
      match: { params },
      profile,
    } = this.props;
    const { user } = profile;

    console.log('userProfile', this.props);
    console.log('userProfile props', params);

    const { success, error, successMsg } = this.state;
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

        {success && <div className="alert success-dailog">{successMsg}</div>}
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
