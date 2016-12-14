import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit(formProps) {
        // Call action creator to sign up the user!

        this.props.signupUser(formProps);
        console.log("Props signup: ", this.props);
    }
    renderAlert() {
        if(this.props.errorMessage) {
            return (
                    <div className="alert alert-danger">
                        <strong>Oops! </strong>{this.props.errorMessage}
                    </div>
                )

        }
    }
    render() {
        const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props;
        console.log(this.props.errorMessage);
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fildset className="form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control" {...email}/>
                    {email.touched && email.error && <div className="error">{email.error}</div>}
                </fildset>
                <fildset className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" {...password}/>
                    {password.touched && password.error && <div className="error">{password.error}</div>}
                </fildset>
                <fildset className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" {...passwordConfirm}/>
                    {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}

                </fildset>

                <div className="form-group">
                    <button action="submit" className="btn btn-primary btn-dk">Sign up</button>
                </div>
                {this.renderAlert()}
            </form>
        );
    }
}
function validate(formProps) {
    const errors = {};
    if(!formProps.email) {
        errors.email = 'Please enter your email!';
    }
    if(!formProps.password) {
        errors.password = 'Please enter your password!';
    }
    if(!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please enter your password Confirm!';
    }

    if(formProps.password != formProps.passwordConfirm) {
        errors.password = 'password does not matched';
    }
    return errors;
}
function mapStateToProps(state) {
    console.log('state: ', state);
    return {errorMessage: state.auth.error}
}
export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate: validate
},mapStateToProps,actions)(Signup);