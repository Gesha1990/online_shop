import React from 'react';
import style from './ProductinDetail.module.css';
import electronics from '../../../assets/img/electronics.png';



const ProductInDetail = (props) => {

  const reg = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
  const isImg = props.img.match(reg);

  return (
      <div>

          <h2 className={style.productTitle}>{props.title}</h2>
          <div><img src={isImg || electronics} alt="alectronic"  className={style.img}/></div>
          <p className={style.description}>Product Description</p>
          <div className={style.text}>{props.text}</div>

      </div>

  )
}

export default ProductInDetail;
