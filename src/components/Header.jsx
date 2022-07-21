import React, { useEffect} from 'react';   
import { Link } from "react-router-dom"; 
import { useSelector } from 'react-redux'   

import Search from '../components/Search';
            
function Header() {
   const items = useSelector((state) => state.cart.items);
   const totalCost = useSelector((state) => state.cart.totalCost);

   useEffect(() => {
      const dataForLS = JSON.stringify(items);
      localStorage.setItem("cart", dataForLS);
   }, [items]);


   return (           
   <header className="header">
      <div className="header__flex">
         <div className="header__logo">
            <Link to="/index.html">
               <div className="header__logo__container">
                  <div className="logo__img"></div>
                  <div className="logo__text">
                     <div className="logo__text__title">Pizza Bro</div>
                     <div className="logo__text__description">The best pizza in the galaxy</div>
                  </div>
               </div>
            </Link>
         </div>
         <Search />
         <div className="button__cart">
         <Link to="/Cart">
               <div className="header__cart__container">
                  <div className="cart__price">{totalCost} $</div>
                  <div className="cart__count">
                     <div className="cart__count__img"></div>
                     <div className="cart__count__number">{items.length}</div>
                  </div>
               </div>
         </Link>
         </div>
      </div>
   </header>
   );
}

export default Header;