import { useState } from 'react';    
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";

import { addItem } from '../redux/slices/cartSlice'         


const PizzaFullCart = () => {
   const [selectType, setSelectType] = useState(0);
   const [selectSize, setSelectSize] = useState(0);
   let { CardId } = useParams();
   const dispatch = useDispatch();

   const countItemCart = useSelector((state) => state.cart.items.find((item) => item.id === Number(CardId)));
   const countItemProduct = useSelector((state) => state.product.items.find((item) => item.id === Number(CardId)));
   const {id, imageUrl, name, types, size, price} = countItemProduct;

   const addedCount = countItemCart ? countItemCart.count : 0;

   const addItems = ()=> {
      const item = {
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
      <article className="product__card_full" data-testid="testproduct">
         <img className="product__card_full__img" src={imageUrl}></img>
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
               <div className="button__text__round">
                  {addedCount > 0 &&
                  <div className="button__text2">{addedCount}</div>
                  }  
               </div>
            </button>
         </div>
      </article>
   );
}

export default PizzaFullCart;