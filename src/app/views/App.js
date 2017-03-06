import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchPhpUsers } from '../action/usersAction';

export class App extends React.Component {
  componentWillMount() {
    this.props.fetchPhpUsers();
  }
  render() {
    return (
      <div>
        <nav className="nav-wrapper">
          <a href="#" className="brand-logo">Github App</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>About</li>
            </ul>
        </nav>
        <p>PHP Developers in Nairobi</p>
        {this.props.children}
      </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object
};

const mapStateToProps =(state) => ({
  state
});


export default connect(mapStateToProps, {
  fetchPhpUsers
})(App);