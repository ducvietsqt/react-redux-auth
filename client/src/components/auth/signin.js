import React, {Component} from 'react';
import {reduxForm}  from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
    handleFormSubmit({email, password}) {
        console.log(email, password);
        console.log('Mr props: ', this.props);
        this.props.signinUser({email, password});
        // Need to do something to log user in

    }
    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong>{this.props.errorMessage}
                </div>
            )
        }
    }
    render() {
        const {handleSubmit, fields: {email, password}} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fildset className="form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control" {...email}/>
                </fildset>
                <fildset className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control"{...password}/>
                </fildset>
                {this.renderAlert()}

                <div className="form-group">
                    <button action="submit" className="btn btn-primary btn-dk">Sign in</button>
                </div>
            </form>
        )
    }
}
function mapStateToProps(state) {
    return {errorMessage: state.auth.error}
}
export default reduxForm({form: 'signin', fields: ['email','password']}, mapStateToProps, actions)(Signin);