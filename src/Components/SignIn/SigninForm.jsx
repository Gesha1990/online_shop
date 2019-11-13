import React from 'react';
import style from './SignIn.module.css'
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {NavLink} from "react-router-dom";


const SigninForm = (props) => {
  let resetFields = {
    username: '',
    password: ''
  };
  if(props.submitSucceeded) {
    props.initialize(resetFields, true)
}
  return (

    <form onSubmit={props.handleSubmit} className={style.wrapAutorization}>
      <span className={style.title}>Sign in</span>
      <Field component={TextArea} name={'username'} placeholder={'User name'} validate={[required]}
             className={style.Field}/>
      <Field component={TextArea} name={'password'} placeholder={'Password'} validate={[required]}
             className={style.Field}/>
      <button className={style.btn}>Sign in</button>
      <NavLink to='/signup' className={style.btn}>Sign up</NavLink>
      {props.error && <div className={style.summeryError}>
        {props.error}
      </div>}
    </form>

  )
};

export const SigninReduxForm = reduxForm({form: 'signin'})(SigninForm);


