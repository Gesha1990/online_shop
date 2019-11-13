import React from 'react';
import {connect} from 'react-redux'
import {compose} from "redux";
import {SettingsReduxForm} from "./AddProductsForm";
import {addProductThunkCreator} from "../../redux/productsReducer";

class AddProductsContainer extends React.Component {
  onSubmit = ({title, img,text}) =>{
    this.props.addProductThunkCreator(title, img,text)
};
  render(){

    return (
     <div>
       <SettingsReduxForm onSubmit={this.onSubmit} postProduct={this.props.postProduct}/>
     </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    postProduct: state.productsPage.postProduct
  }
};

export default compose(
  connect(mapStateToProps, {addProductThunkCreator})
)(AddProductsContainer);
