import React from 'react';
import {connect} from 'react-redux'
import {SignupReduxForm} from "../SignUp/SignupForm";
import {signupThunkCreator} from "../../redux/authReducer";


function SignUp (props) {

  const onSubmitSignUp = ({username, password}) => {
    props.signupThunkCreator(username, password)
  };

  return(
    <div>
       <SignupReduxForm onSubmit={onSubmitSignUp} isSignUp={props.isSignUp} />
    </div>
  )

}

let mapStateToPropsForRedirect = (state) => {
  return {
    isSignUp: state.auth.isSignUp,
  }
};


export default connect(mapStateToPropsForRedirect, {signupThunkCreator})(SignUp);
