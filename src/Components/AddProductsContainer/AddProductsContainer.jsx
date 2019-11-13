import React from 'react';
import {connect} from 'react-redux'
import {compose} from "redux";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {SettingsReduxForm} from "./AddProductsForm";
import {addProductThunkCreator} from "../../redux/productsReducer";

class AddProductsContainer extends React.Component {
  onSubmit = ({title, img,text}) =>{
    this.props.addProductThunkCreator(title, img,text)
}

  render(){

    return (
     <>
       <SettingsReduxForm onSubmit={this.onSubmit} postProduct={this.props.postProduct}/>
     </>
    )
  }

}


let mapStateToProps = (state) => {
  return {
    postProduct: state.productsPage.postProduct
  }
}


export default compose(
  connect(mapStateToProps, {addProductThunkCreator})
)(AddProductsContainer);
