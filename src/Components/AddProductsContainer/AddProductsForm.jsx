import React from 'react';
import style from './AddProducts.module.css';
import Field from "redux-form/es/Field";
import {reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {TextArea} from "../Common/FormsControls/FormsControls";

const maxLength250 = maxLengthCreator(250);

const AddProductsForm = (props) => {
  let resetFields = {
    title: '',
    text: '',
    img: '',

  };
  if (props.submitSucceeded) {
    props.reset(resetFields)
  }

  return (
    <form className={style.addPrducts} onSubmit={props.handleSubmit}>
      <div>
        Product title: <br/>
        <Field component={TextArea} name={'title'} validate={[required]}>Product title</Field>
      </div>
      <div>
        Product description: <br/>
        <Field component={TextArea} name={'text'} className={style.description}
               validate={[required, maxLength250]}> Product description</Field>
      </div>
      <div>
        Photo Url:<br/>
        <Field  component={TextArea} name={'img'} validate={[required]}>Photo Url</Field>
      </div>
      {props.error && <div className={style.summeryError}>
        {props.error}
      </div>}
      {props.postProduct && <div className={style.done}>DONE</div>}
      {props.error && <div className={style.summeryError}>
        {props.error}
      </div>}
      <div>
        <button className={style.addBtn}>Add product</button>
      </div>
    </form>
  )
};
export const SettingsReduxForm = reduxForm({form: 'addProducts'})(AddProductsForm);
