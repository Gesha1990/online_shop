import * as axios from "axios/index";

const instance = axios.create({
  baseURL: "http://smktesting.herokuapp.com/api/",

});

export const productsAPI = {
  getAllProducts() {
    return instance.get('products/')
      .then(response => response.data)
  },
  addProduct(title, img, text) {
    return instance.post('products/', {title, img, text})
  }
};
export const commentsAPI = {
  getAllComments(productId) {
    return instance.get(`reviews/${productId}`)
      .then(response => response.data)
  },
  postComment(product_id, token, rate = 0, text,) {
    return instance.post(`reviews/${product_id}`, {rate, text}, {
      headers: {'AUTHORIZATION': "Token " + token}
    })
  }
};


export const authAPI = {
  signin(username, password) {
    return instance.post('login/', {username, password})
  },
  signup(username, password) {
    return instance.post('register/', {username, password})
  }
}
