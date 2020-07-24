import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import { clearAuthState } from '../actions/auth';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordRef = React.createRef();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  componentWillUnmount = () => {
    this.props.dispatch(clearAuthState());
  };

  handleUsernameChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };

  handleConfirmPasswordChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      confirmPassword: e.target.value,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log('this.emailInputRef', this.emailInputRef);
    // console.log('this.passwordRef', this.passwordRef);
    console.log(this.state);
    const { email, password, name, confirmPassword } = this.state;

    if (email && password && name && confirmPassword) {
      // this.props.dispatch(startSignup());
      this.props.dispatch(signup(name, email, password, confirmPassword));
    }
  };

  render() {
    const { error, inProgress, isLoggedIn } = this.props.auth;
    if (isLoggedIn) {
      //redirect to home page
      return <Redirect to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="name"
            required
            onChange={this.handleUsernameChange}
            value={this.state.name}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm-Password"
            required
            onChange={this.handleConfirmPasswordChange}
            value={this.state.confirmPassword}
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit} disabled={inProgress}>
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Signup);
