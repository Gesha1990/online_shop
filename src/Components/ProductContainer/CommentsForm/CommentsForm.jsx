import React from 'react';
import style from './CommentsForm.module.css';
import {required} from "../../../utils/validators/validators";
import {TextArea} from "../../Common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";


const CommentsForm = (props) => {

  let resetFields = {
    text: '',
  };
  if(props.submitSucceeded) {
    props.reset(resetFields)
  }

  return (

    <div>
      <form className={style.addPrducts} onSubmit={props.handleSubmit}>
        <div>
          <Field component={TextArea} name={'text'} validate={[required]} className={style.commentsField}></Field>
          <button className={style.submReview}>Submit Review</button>
        </div>
      </form>
    </div>
  )
}
export const CommentsReduxForm = reduxForm({form: 'addProducts'})(CommentsForm)

