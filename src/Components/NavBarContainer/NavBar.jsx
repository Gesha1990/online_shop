import React from 'react';
import style from './NavBar.module.css';
import list from '../../assets/img/icons/article.svg';
import add from '../../assets/img/icons/add.svg';
import login from '../../assets/img/icons/login.svg';
import logout from '../../assets/img/icons/logout.svg';

import {NavLink} from "react-router-dom";



function NavBar  (props) {

  let logOut = () => {
    props.signoutThunkCreator(null, null, false)

  };

   return (
     <div className={style.navBar}>

       <NavLink to={'/addProduct'} title="add product"><img className={style.icon} src={add} alt="menu"/></NavLink>
       <NavLink to={'/products'} title="products"><img className={style.icon} src={list} alt="productList"/></NavLink>
       {props.isSignIn? <NavLink to='/signin'><img  src={logout} alt="logout" className={style.icon} onClick={logOut}/><span className={style.login}>{props.userName}</span></NavLink>:
         <NavLink to='/signin' ><img src={login} alt="users" className={style.icon}  /></NavLink>}
     </div>
   )
 }



export default NavBar;
