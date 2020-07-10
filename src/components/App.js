import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchPosts } from '../actions/posts';
import { Navbar, Home, Page404, Login, Signup } from './index';
import propTypes from 'prop-types';
import * as jwtDecode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';

// const Signup = (props) => {
//   console.log(props);
//   return <h2>Signup</h2>;
// };

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
    }
  }

  render() {
    // console.log('props', this.props);
    const { posts } = this.props;
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
              return <Home posts={posts} {...props} />;
            }}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
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
  };
}

// to match the type of prop required
App.propTypes = {
  posts: propTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
