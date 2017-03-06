import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class Home extends React.Component {
  redirect(user) {
    window.location.href = 'https://github.com/' + user;
  }

  render () {
    const users = this.props.users.data ? this.props.users.data : [];
    return (
      <div>
        <table className="striped">
          <thead>
            <tr>
              <th>Member</th>
              <th>Github</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user) => 
            <tr key={user.id}>
              <td id="user" onClick={() => this.redirect(user.login)}>{user.login}</td>
              <td>{user.type}</td>
            </tr>)}
            {users.length < 0 && <p>fething users...</p>}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state)=> ({
  users: state.users
});

export default connect(mapStateToProps)(Home);