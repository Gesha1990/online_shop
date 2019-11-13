import React from 'react';
import style from './Product.module.css';
import electronics from '../../../assets/img/electronics.png';
import {NavLink} from "react-router-dom";


const Product = (props) => {

  const reg = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
  const isImg = props.img.match(reg);

  return (
      <div className={style.product}>
         <h1 className={style.title}>{props.title}</h1>
          <div className={style.text}>{props.text}</div>
        <img src={isImg || electronics} alt="img" className={style.img}/>
        <NavLink to={'product/' + props.id} className={style.seeMore}>See more>></NavLink>
      </div>

  )
};

export default Product;
