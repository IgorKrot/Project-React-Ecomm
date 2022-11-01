import { useState } from 'react';    
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

import { addItem, CartItem } from '../redux/slices/cartSlice'         
import { ProductItem } from '../redux/slices/productSlice';
import { RootState } from '../redux/store';

const Productcard = ({id, imageUrl, name, types, size, price}: ProductItem) => {
   const [selectType, setSelectType] = useState<number>(0);
   const [selectSize, setSelectSize] = useState<number>(0);
   const countItem = useSelector((state: RootState) => state.cart.items.find((item) => item.id === id));

   const dispatch = useDispatch();

   const addedCount = countItem ? countItem.count : 0;

   const addItems = ()=> {
      const item: CartItem = {
         id,
         imageUrl,
         name,
         types: types[selectType],
         size: size[selectSize],
         price,
         count: 0,
      }
      dispatch(addItem(item));
   };

   return (           
      <article className="product__card" data-testid="testproduct">
         <Link key={id} to={`/${id}`}>
            <img className="product__card__img" src={imageUrl}></img>
         </Link>
         <div className="product__card__title">{name}</div>
         <div className="product__card__boxsetting">
            <div className="product__card__type__flex">
               {types.map((typespizza, indextype) =>
               <div className={selectType == indextype ? "product__card__type activesetting" : "product__card__type"} onClick={() => setSelectType(indextype)} key={indextype}>
                  <div className="product__card__type__text">{typespizza}</div>
               </div>
               )}
            </div>
            <div className="product__card__size__flex" >
               {size.map((sizepizza, indexsize) =>
               <div className={selectSize == indexsize ? "product__card__size activesetting" : "product__card__size"} onClick={() => setSelectSize(indexsize)} key={indexsize}>
                  <div className="product__card__size__text">{sizepizza} sm</div>
               </div>
               )}
            </div>
         </div>
         <div className="product__card__footer__flex">
            <div className="product__card__footer__price">{price} $</div>
            <button className="product__card__footer__button" onClick={addItems}>
               <div className="button__img"></div>
               <div className="button__text">Add</div>
               <div className={addedCount > 0 ? "button__text__round color" : "button__text__round"}>
                  {addedCount > 0 &&
                  <div className="button__text2">{addedCount}</div>
                  }  
               </div>
            </button>
         </div>
      </article>
   );
}

export default Productcard;