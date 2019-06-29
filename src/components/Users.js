import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <p>{this.props.username}</p>
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
