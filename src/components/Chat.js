import React, { Component } from 'react';
import '../chat.css';
import io from 'socket.io-client';
import { connect } from 'react-redux';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      typedMessage: '',
      open: true,
    };

    // connecting socket using chat server
    this.socket = io.connect('http://54.237.158.65:5000');
    this.userEmail = props.user.email;

    if (this.userEmail) {
      this.setupConnections();
    }
  }

  // makinf connection for group chat using socket
  setupConnections = () => {
    const socketConnection = this.socket;
    const self = this;

    this.socket.on('connect', function () {
      console.log('CONNECTION ESTABLISHED');

      socketConnection.emit('join_room', {
        user_email: this.userEmail,
        chatroom: 'codeial',
      });

      socketConnection.on('user_joined', function (data) {
        // console.log('NEW USER JOINED', data);
      });
    });

    this.socket.on('receive_message', function (data) {
      // add message to state
      const { messages } = self.state;
      const messageObject = {};
      messageObject.content = data.message;

      if (data.user_email === self.userEmail) {
        messageObject.self = true;
      }

      self.setState({
        messages: [...messages, messageObject],
        typedMessage: '',
      });
    });
  };

  // submit msg in group chat
  handleSubmit = () => {
    const { typedMessage } = this.state;

    if (typedMessage && this.userEmail) {
      this.socket.emit('send_message', {
        message: typedMessage,
        user_email: this.userEmail,
        chatroom: 'codeial',
      });
    }
  };

  // to open and close chat box
  toggleClass = () => {
    const currentState = this.state.open;
    this.setState({ open: !currentState });
  };

  render() {
    const { messages, typedMessage } = this.state;
    return (
      <div
        className={
          this.state.open ? 'chat-container open' : 'chat-container close'
        }
      >
        <div className="chat-header">
          Chat
          {this.state.open ? (
            <img
              src="https://www.iconsdb.com/icons/preview/white/minus-5-xxl.png"
              alt=""
              height={17}
              onClick={this.toggleClass}
            />
          ) : (
            <img
              src="https://www.iconsdb.com/icons/preview/white/plus-5-xxl.png"
              alt=""
              height={17}
              onClick={this.toggleClass}
            />
          )}
        </div>
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              className={
                message.self
                  ? 'chat-buuble self-chat'
                  : 'chat-bubble other-chat'
              }
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={typedMessage}
            onChange={(e) => this.setState({ typedMessage: e.target.value })}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
  };
}

export default connect(mapStateToProps)(Chat);
