import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
      {this.props.numberOfUsers}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger;
  return { Users: state.users, numberOfUsers: state.users.count }
}

export default connect()(Users);
