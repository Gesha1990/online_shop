import React from 'react';
import style from './AuthorizationContainer.module.css'
import {connect} from 'react-redux'
import {HashRouter, Redirect, Route} from "react-router-dom";
import {SignupReduxForm} from "./SignupForm";
import {SigninReduxForm} from "./SigninForm";
import {signinThunkCreator, signupThunkCreator} from "../../redux/authReducer";


class AuthorizationContainer extends React.Component {


  render() {
debugger
    const onSubmitSignIn = ({username, password}) => {

      this.props.signinThunkCreator(username, password)
    };

    const onSubmitSignUp = ({username, password}) => {
      this.props.signupThunkCreator(username, password)
    };

    if(this.props.isSignIn) return <Redirect to={'/products'}/>;

    return (
      <div className={style.loginForm}>
        <HashRouter basename={process.env.PUBLIC_URL}>>
          <Route path='/signin' render={() => <SigninReduxForm onSubmit={onSubmitSignIn} isSignIn={this.props.isSignIn}/>}/>
          <Route path='/signup' render={() => <SignupReduxForm onSubmit={onSubmitSignUp} isSignUp={this.props.isSignUp}/>}/>
        </HashRouter>
      </div>
    )
  }
};

let mapStateToPropsForRedirect = (state) => {
  return {
    isSignUp: state.auth.isSignUp,
    isSignIn: state.auth.isSignIn
  }
};


export default connect(mapStateToPropsForRedirect, {signinThunkCreator, signupThunkCreator})(AuthorizationContainer);
