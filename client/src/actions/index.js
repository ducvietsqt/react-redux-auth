import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER ,UNAUTH_USER ,AUTH_ERROR, FETCH_MESSAGE} from './types';

const ROOT_URL = 'http://localhost:3090';


export function signinUser({email, password}) {
 return function (dispatch) {
    // submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, {email, password})
        .then(function (response) {
            console.log("I am here!", response.data);
            // If request is good...
            // - Update state to indicate user is authenticated
            dispatch({type: AUTH_USER});
            // - Save the JWT token
            localStorage.setItem('token', response.data.token);
            // - redirect to the route /feature
            browserHistory.push('/feature');
        })
        .catch(function(){
            // If request is bad...
            // - Show an error to the user
            dispatch(authError('Bad Login Info'));
        });
     }
}
export function signupUser({email, password}) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signup`, {email, password})
            .then(function (response) {
                dispatch({type: AUTH_USER});
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/feature');
                console.log(JSON.stringify(response, null, 2));
            })
            .catch(function(response){
                dispatch(authError('Email is in use'));
            })
    }
}
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}
export function signoutUser() {
    localStorage.removeItem('token');
    return {type: UNAUTH_USER}
}
export function fetchMessage() {
    return function (dispatch) {
        axios.get(ROOT_URL, {headers: {authorization: localStorage.getItem('token')}})
            .then(function (response) {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.message
                })
            })
    }
}