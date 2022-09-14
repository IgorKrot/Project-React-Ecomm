import React from 'react';      
import { Link } from "react-router-dom"; 
import { useSelector, useDispatch } from 'react-redux' 

import { removeAllItems, removeItem, cartItemPlus, cartItemMinus } from '../redux/slices/cartSlice'      
import { RootState } from '../redux/store';
   


function Cart() {
   const items = useSelector((state: RootState) => state.cart.items);
   const totalCost = useSelector((state: RootState) => state.cart.totalCost);

   const dispatch = useDispatch();


   return (           
      <div className="cart">
         <div className="cart__header">
            <div className="cart__header__left">
               <div className="cart__header__left__text">Cart</div>
            </div>
            <button className="cart__header__right">
               <div className="cart__header__right__text" onClick={() => {dispatch(removeAllItems())}}>Clear Cart</div>
            </button>
         </div>
         {items.map((card, id: number) =>
         <div key={id}>   
            <div className="cart__products" data-testid="testproduct">
            <img className="cart__products__img" src={card.imageUrl}></img>
            <div className="cart__products__text">
               <div className="cart__products__title">{card.name}</div>   
               <div className="cart__products__desc">{card.types}, {card.size} sm</div>
            </div>
            <div className="cart__products__add">
               <button className="cart__products__minus" onClick={() => dispatch(cartItemMinus(card))}>
                  <div className="minus__text"></div>
               </button>
               <div className="cart__products__count">
                  <div className="count__text">{card.count}</div>
               </div>
               <button className="cart__products__plus" onClick={() => dispatch(cartItemPlus(card))}>
                  <div className="plus__text"></div>
               </button>
            </div>
            <div className="cart__products__price">
               <div className="cart__products__price__text">{card.price * card.count} $</div>
            </div>
            <button className="cart__product__delete" onClick={() => {dispatch(removeItem(card))}}>
               <div className="cart__product__delete__text"></div>
            </button>
            </div>
         </div>
         )}
         <div className="cart__total">
            <div className="total__count">
               <div className="total__count__title">total pizzas:</div>
               <div className="total__count__count">{items.length}</div>
            </div>
            <div className="total__cost">
               <div className="total__cost__title">total cost:</div>
               <div className="total__cost__count">{totalCost} $</div>
            </div>
         </div>
         <div className="cart__footer">
            <button className="cart__footer__buttonback">
               <Link to="/">
                  <div className="cart__footer__buttonback__text">back</div>
               </Link>
            </button> 
            <button className="cart__footer__buttonpay">
               <Link to="/pay">
                  <div className="cart__footer__buttonpay__text">pay</div>
               </Link>
            </button>
         </div>
      </div>
   );
}

export default Cart;
