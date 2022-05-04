import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import basketIcon from '../../images/basket.svg';
import removeIcon from '../../images/remove-cofee.svg';
import trashIcon from '../../images/trash.svg';
import CartItems from './CartItems';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../../redux/actions/Cart';
import Button from '../Button';

function Cart() {

  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedCoffe = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm('Are you want to empty the cart?')) {
      dispatch(clearCart());
    }
  };
  const onRemoveItem = (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      dispatch(removeCartItem(id));
    }
  };
  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const onClickOrder = () => {
    console.log('Your order', items);
  };


  return (
    <div className="wrapper-cart">
      <div className="header-cart">
        <div className="container">
          <div className="header__cart">
            {/* <div className="button button--cart"> */}
            <div className="custom-btn btn-wide btn-double">
              <div className='btn-content'>
              <span>{totalPrice} $</span>
              <div className="button__delimiter">
                <img src={basketIcon} alt="coffe" />
                <div>{totalCount}</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 classNames="content__title">
                <img src={removeIcon} alt="cofee" /> CART</h2>
              <div className="cart__clear"> 
                <img src={trashIcon} alt="cofee" />
                <span onClick={onClearCart}>Clear Cart</span>
              </div>
            </div>
            <div className="content__items">
            {addedCoffe.map((obj) => (
            <CartItems 
               key = {obj.id}
               id = {obj.id}
               name = {obj.name}
               type = {obj.type}
               size = {obj.size}
               price = {obj.price}
               totalPrice={items[obj.id].totalPrice}
               totalCount={items[obj.id].items.length}
               onRemove={onRemoveItem}
               onMinus={onMinusItem}
               onPlus={onPlusItem}
                />
            ))} 

            </div>

            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span> Total: <b>{totalCount}</b> </span>
                <span> Order price: <b>{totalPrice} $</b> </span>
              </div>
              <div className="cart__bottom-buttons">
                <a href="/" className="custom-btn btn-wide button$ ">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <Link to="/">Come Back</Link>
                </a>
                <Button onClick={onClickOrder} className="btn-wide">
                  <span>Pay Now</span>
                </Button>
              </div>
            </div>
          </div>
          </div>
          </div> 
          </div>  )
}

export default Cart