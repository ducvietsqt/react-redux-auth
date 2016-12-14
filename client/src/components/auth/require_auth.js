import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

export default function (ComposedComponent) { // sture component chill add parent Component
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        }
        componentWillMount() {
            /*if(!this.props.authenticated) {
                this.context.router.push('/');
            }*/
        }
        componentWillUpdate(nextProps) {
            if(!nextProps.authenticated){
                this.context.router.push('/');
            }
        }
        render() {
            return(
                <ComposedComponent {...this.props} />
            )
        }
    }
    function mapStateToProps(state) {
        return {authenticated: state.authenticated}
    }
    return connect(mapStateToProps, actions)(Authentication);
}



