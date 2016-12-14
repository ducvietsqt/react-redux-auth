import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }
    render() {
        console.log('Logout: ',this.props);
        return <div>Sorry to see you go...</div>
    }
}
export default connect(null, actions)(Signout);