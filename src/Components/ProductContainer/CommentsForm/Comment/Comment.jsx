import React from 'react';
import style from './Comment.module.css';

function Comment(props) {

  return (
    <li className={style.listComment}>
      <p className={style.userName}>{props.userName + ' at ' + props.created_at}</p>
      <p className={style.rate}>{'Rate: ' + props.rate}</p>
      <span className={style.comment}>{'Comment: ' + props.text}</span>
    </li>
  )
}

export default Comment
