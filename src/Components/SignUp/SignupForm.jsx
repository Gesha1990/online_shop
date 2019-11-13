import React from 'react';
import style from './SignUp.module.css'
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {NavLink} from "react-router-dom";

const maxLength30 = maxLengthCreator(30);

const Signup = (props) => {
console.log(props.isSignUp);

  let resetFields = {
    username: '',
    password: ''
  };

  if(props.isSignUp) {
    props.initialize(resetFields, true)
  }

  return (

    <form onSubmit={props.handleSubmit} className={style.wrapAutorization}>
      <span className={style.title}>Sign up</span>
      <Field component={TextArea} name={'username'} placeholder={'User name'} validate={[required, maxLength30]}
             className={style.Field}/>
      <Field component={TextArea} name={'password'} placeholder={'Password'} validate={[required, maxLength30]}
             className={style.Field}/>
      <button className={style.btn}>Sign up</button>
      <NavLink to='/signin' className={style.btn}>Sign in</NavLink>
      {props.isSignUp && <div className={style.done}>DONE</div>}
      {props.error && <div className={style.summeryError}>
        {props.error}
      </div>}
    </form>


  )
};

export const SignupReduxForm = reduxForm({form: 'signup'})(Signup);


