import React from 'react';

import {connect} from 'react-redux'

import NavBar from "./NavBar";
import {signoutThunkCreator} from "../../redux/authReducer";

class NavBarContainer extends  React.Component{

  render(){
    return (
      <NavBar userName={this.props.userName} signoutThunkCreator={this.props.signoutThunkCreator} isSignIn={this.props.isSignIn} />
      )
  }
}
let mapStateToProps = (state) => {
  return{
    userName: state.auth.userName,
    isSignIn: state.auth.isSignIn,
  }
};
export default connect(mapStateToProps, {signoutThunkCreator})(NavBarContainer);
