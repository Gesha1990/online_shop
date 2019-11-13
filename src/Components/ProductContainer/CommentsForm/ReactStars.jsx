import React from 'react';
import ReactStars from "react-stars";


const ReactStarsForm = (props) => {


  return (
    <div>
      <ReactStars
        count={5}
        onChange={props.ratingChanged}
        size={24}
        color2={'#ffd700'}/>
    </div>
  )
};
export default ReactStarsForm;

