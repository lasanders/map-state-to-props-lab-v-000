import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  state = {
    username: '',
    hometown: ''
  }

  render() {
    return (
      <div>
        <ul>
          Users!
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger;
  return { Users: state.users }
}

export default connect()(Users);
