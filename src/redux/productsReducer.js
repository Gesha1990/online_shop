import {productsAPI} from "../api/api";


const ADD_ALL_PRODUCTS = 'ADD-ALL-PRODUCTS';
const ADD_PRODUCT = 'ADD-PRODUCT';
const POST_PRODUCTS = 'POST-PRODUCT';



let initialState = {
  products:[],
  product: [],
  postProduct: false,
  isLoaded: false
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_ALL_PRODUCTS: {
      return {
        ...state,
        products: action.products,
        isLoaded: action.isLoaded
      }
    }
    case ADD_PRODUCT: {
      return {
        ...state,
        product: state.products.filter(product => product.id === +action.id),
        isLoaded: action.isLoaded
      }
    }
    case POST_PRODUCTS: {
      return {
        ...state,
        postProduct: action.success,
      }
    }
    default:
      return state;
  }
}

 const addAllProductsAC = (products) => ({type: ADD_ALL_PRODUCTS, products, isLoaded: true});
 const postProductSuccessAC = (success) => ({type: POST_PRODUCTS, success: success});
 const addProductAC = (id) => ({type: ADD_PRODUCT, id: id, isLoaded: true});

export const getAllProductsThunkCreator = (id = 1) => {
  return (dispatch) => {
    productsAPI.getAllProducts()
      .then(data => {
        dispatch(addAllProductsAC(data))
        dispatch(addProductAC(id))
      })
  }
};
export const addProductThunkCreator = (title, img,text) => {
  return (dispatch) => {
    productsAPI.addProduct(title, img,text)
      .then(data => {
       if(data.status === 201) {
         dispatch(postProductSuccessAC(true))
         setTimeout(() => {
           dispatch(postProductSuccessAC(false))
         }, 2000)
       }
      })
  }
};

export default productsReducer;
