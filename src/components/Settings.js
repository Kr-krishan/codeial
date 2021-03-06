import React from 'react';
import { connect } from 'react-redux';
import { editUser, clearAuthState } from '../actions/auth';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.auth.user.name,
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }

  // to track change in input of each field(common function)
  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  // to update or edit profile
  handleUpdate = () => {
    const { name, password, confirmPassword } = this.state;
    const { user } = this.props.auth;
    this.props.dispatch(editUser(name, password, confirmPassword, user._id));
  };

  // to clear the state
  componentWillUnmount = () => {
    this.props.dispatch(clearAuthState());
  };

  render() {
    const { user, error } = this.props.auth;

    // if in editmode then form will show
    const { editMode } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        {error && <div className="alert error-dailog">{error}</div>}
        {error === false && (
          <div className="alert success-dailog">
            Profile Successfully Updated
          </div>
        )}
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}
        </div>

        {editMode && (
          <div className="field">
            <div className="field-label">New Password</div>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => this.handleChange('password', e.target.value)}
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div className="field-label">Confirm Password</div>
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) =>
                this.handleChange('confirmPassword', e.target.value)
              }
              value={this.state.confirmPassword}
            />
          </div>
        )}

        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn" onClick={this.handleUpdate}>
              Save
            </button>
          ) : (
            <button
              className="button save-btn"
              onClick={() => this.handleChange('editMode', true)}
            >
              Edit Profile
            </button>
          )}
          {editMode && (
            <div
              className="go-back"
              onClick={() => this.handleChange('editMode', false)}
            >
              Go Back
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Settings);
