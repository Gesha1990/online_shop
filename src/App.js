import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import ProductsContainer from "./Components/ProductsContainer/ProductsContainer";
import AddProductsContainer from "./Components/AddProductsContainer/AddProductsContainer";
import ProductContainer from "./Components/ProductContainer/ProductContainer";
import NavBarContainer from "./Components/NavBarContainer/NavBarContainer";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";



function App() {

  return (
    <div className="App">
      <NavBarContainer/>
      <Route  path='/signin' render={() => <SignIn/>}/>
      <Route  path='/signup' render={() => <SignUp/>}/>
      <Route  path='/products' render={() => <ProductsContainer/>}/>
      <Route  path='/addProduct' render={() => <AddProductsContainer/>}/>
      <Route  path='/product/:productId?' render={() => <ProductContainer/>}/>
    </div>
  );
}

export default App;
