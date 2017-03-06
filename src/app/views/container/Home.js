import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class Home extends React.Component {
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
              <td id="user"><a target="blank" href={`https://github.com/${user.login}`}>{user.login}</a></td>
              <td>{user.type}</td>
            </tr>)}
          </tbody>
        </table>
        {users.length === 0 && <p>Fetching users...</p>}
      </div>
    );
  }
}

const mapStateToProps = (state)=> ({
  users: state.users
});

export default connect(mapStateToProps)(Home);