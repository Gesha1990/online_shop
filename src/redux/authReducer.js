import {authAPI} from "../api/api";
import {stopSubmit} from 'redux-form'


const SET_USER_DATA = 'SET-USER-DATA';
const SIGN_UP_SUCCESS = 'SIGN-UP-SUCCESS';


let initialState = {
  userName: null,
  token: null,
  isSignIn: false,
  isSignUp: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSignUp: action.success
      };
    }
    default:
      return state;
  }
};

const setUserDataAC = (userName, token, isSignIn) => ({type: SET_USER_DATA, data: {userName, token, isSignIn}});
const signUpSuccessAC = (success) => ({type: SIGN_UP_SUCCESS, success: success});

export const signinThunkCreator = (username, password) => (dispatch) => {
  return authAPI.signin(username, password)
    .then(data => {
      if (data.status === 200) {
        if (data.data.message) {
          let message = data.data.message || 'Some error';
          dispatch(stopSubmit("signin", {_error: message}));
        } else {
          let obj = JSON.parse(data.config.data);
          dispatch(setUserDataAC(obj.username, data.data.token, true));
        }
      }
    })
};
export const signoutThunkCreator = (userName, token, isSignIn) => {
  return (dispatch) => {
    //  if will be possibility send request
    dispatch(setUserDataAC(userName, token, isSignIn))
  }
};
export const signupThunkCreator = (username, password) => (dispatch) => {
  return authAPI.signup(username, password)
    .then(data => {
      if (data.status === 201) {
        dispatch(signUpSuccessAC(true))
        setTimeout(() => {
          dispatch(signUpSuccessAC(false))
        }, 2000)
      } else if (data.status === 200) {
        let message = data.data.message.length > 0 ? data.data.message : 'Some error';
        dispatch(stopSubmit("signup", {_error: message}))
      }
    })
};


export default authReducer;
