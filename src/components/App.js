import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { fetchPosts } from '../actions/posts';
import {
  Navbar,
  Home,
  Page404,
  Login,
  Signup,
  Settings,
  UserProfile,
} from './index';
import propTypes from 'prop-types';
import * as jwtDecode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';
import { fetchUserFriends } from '../actions/friends';

// const Settings = () => {
//   return <div>Settings</div>;
// };

// added private route for settings
const PrivateRoute = (privateRouteProps) => {
  const { path, isLoggedIn, component: Component } = privateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};
class App extends React.Component {
  // to fetch all the posts from api
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.token;
    if (token) {
      const user = jwtDecode(token);
      console.log('user', user);

      this.props.dispatch(
        authenticateUser({
          _id: user._id,
          name: user.name,
          email: user.email,
        })
      );

      this.props.dispatch(fetchUserFriends(user._id));
    }
  }

  render() {
    // console.log('props', this.props);
    const { posts, auth, friends } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}
        </div>

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <Home
                  {...props}
                  posts={posts}
                  friends={friends}
                  isLoggedIn={auth.isLoggedIn}
                />
              );
            }}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute
            path="/settings"
            component={Settings}
            isLoggedIn={auth.isLoggedIn}
          />
          <PrivateRoute
            path="/user/:userId"
            component={UserProfile}
            isLoggedIn={auth.isLoggedIn}
          />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

// to send in props, the things we require from store
function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
    friends: state.friends,
  };
}

// to match the type of prop required
App.propTypes = {
  posts: propTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
