import React from 'react';
import Button from '../Button';
import PlusIcon from "./../../images/plus.svg";
import MinusIcon from "./../../images/minus.svg";
import trashIcon from '../../images/trash.svg';


const CartItems = ({id, name, type, size, price, totalPrice, totalCount, onRemove, onMinus, onPlus}) => {
  
    const handleRemoveClick = () => {
        onRemove(id);
      };
    
      const handlePlusItem = () => {
        onPlus(id);
      };
    
      const handleMinusItem = () => {
        onMinus(id);
      };
    
    return (
          <div className="cart__item">
             <div className="cart__item-info">
              <h3>{name}</h3>
              <p>{type}, {size}</p>
          </div>
          <div className="cart__item-count">
          <div
          onClick={handleMinusItem}
          className="btn__cart-item">
          <img className="btn-content" src={MinusIcon} alt="coffee" />
          </div>
            <b>{totalCount}</b>
              <div
          onClick={handlePlusItem}
          className="btn__cart-item">
           <img className="btn-content" src={PlusIcon} alt="coffee" />
           </div>
             <b>{price} $</b>
                  </div>
          <div className="cart__item-price">
             <b>{totalPrice} $</b>
          </div>
          <div className="cart__item-remove">
             <Button onClick={handleRemoveClick} className="btn__cart-item">
             <img className="btn-content" src={trashIcon} alt="cofee" />
                </Button>
              </div>
          </div>
          
      );
  }

export default CartItems;