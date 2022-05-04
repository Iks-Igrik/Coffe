import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logoSvg from '../../assets/img/logo.jpg';
import Button from '../Button';



const Header = () => {

  const {totalPrice, totalCount} = useSelector(({cart}) => cart);
  
  return (
<div className="header">
<div className="container">
    <div className="header__logo">
    <img width="38" src={logoSvg} alt="coffee logo" />
    <div className="header_top">
      <h1>Coffee-Time</h1>
      <blockquote>The best stories are told over coffee</blockquote>
    </div>
   </div>
  <div className="content__top">
          <div className="menu">
            <ul className= "menu_list">
              <li className="menu_item">Address: Kyiv, Ukraine</li>
              <li className="menu_item">+38 (066) 8210769 (Viber, Telegram)</li>
              <li className="menu_item">
              <a className="menu__link" href="/">Feedback</a>
              </li>
              <li className="menu_item">
              <a className="menu__link" href="/">Contacts</a>
              </li>
              <li className="menu_item">
              <a className="menu__link" href="/">Shipping and payment</a>
              </li>
              <li className="menu_item"> 
              <a className="menu__link" href="/">About Us</a>
              </li>
            </ul>
          </div>
         </div>
  </div>
  <Link to = "/Cart">       
  <Button className="button-cart custom-btn btn-wide"> 
   <div className="btn-block__content">
   <div className='total-price'>{totalPrice} $/&nbsp;</div>   
    <div className='total-price'>{totalCount}</div>
    </div>
  </Button>
 </Link>
 </div>
);
};
export default Header;