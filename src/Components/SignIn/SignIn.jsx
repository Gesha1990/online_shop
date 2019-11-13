import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import {SigninReduxForm} from "../SignIn/SigninForm";
import {signinThunkCreator} from "../../redux/authReducer";


function SignIn (props) {

  const onSubmitSignIn = ({username, password}) => {
    props.signinThunkCreator(username, password)
  };

  if (props.isSignIn) return <Redirect to={'/products'}/>;

  return (
    <div>
         <SigninReduxForm onSubmit={onSubmitSignIn}/>
    </div>
  )
}

let mapStateToPropsForRedirect = (state) => {
  return {
    isSignIn: state.auth.isSignIn,
  }
};


export default connect(mapStateToPropsForRedirect, {signinThunkCreator})(SignIn);
