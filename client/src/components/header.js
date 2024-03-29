import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions';
class Header extends Component {
    renderLinks() {
        if(this.props.authenticated) {
            // Show a link to sign out

            return (
                    <li className="nav-item">
                        <Link className="nav-link" to="/signout">Sign out</Link>
                    </li>
            )

        }else {
           console.log("Header Props: ", this.props);
            // Show a link to sign in or sign up
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signin">Sign in</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/signup">Sign up</Link>
                </li>

            ]

        }


    }
    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="narbar-brand">Redux Auth</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}
function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}
export default connect(mapStateToProps, actions)(Header);
