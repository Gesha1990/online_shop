import {commentsAPI} from "../api/api";


const ADD_ALL_COMMENTS = 'ADD-ALL-COMMENTS';


let initialState = {
  comments: [],
  isLoaded: false
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_ALL_COMMENTS: {
      return {
        ...state,
        comments: action.comments,
      }
    }
    default:
      return state;
  }
};

const addAllProductsAC = (comments) => ({type: ADD_ALL_COMMENTS, comments: comments, isLoaded: true});


export const getAllCommentsThunkCreator = (productId) => {
  return (dispatch) => {
    commentsAPI.getAllComments(productId)
      .then(data => {
        dispatch(addAllProductsAC(data))
      })
  }
};
export const postCommentThunkCreator = (product_id, rate, text, created_by) => {
  return (dispatch) => {
    commentsAPI.postComment(product_id, rate, text, created_by)
      .then(data => {
        if (data.status === 200) {
          dispatch(getAllCommentsThunkCreator(product_id))
        }
      })
  }
};

export default commentsReducer;
