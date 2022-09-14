import React, { useState, useRef, useEffect } from 'react';   
import { useSelector, useDispatch } from 'react-redux'

import { setSelectSort } from '../redux/slices/categorySlice' 
import { RootState } from '../redux/store';


function Sort() {
   const selectSort = useSelector((state: RootState) => state.filter.selectSort);
   const [openPopup, setOpenPopup] = useState<boolean>(false);

   const dispatch = useDispatch();
   const popupRef = useRef<HTMLDivElement>(null);
   
   const listsort: string[] = ["by popularity", "by price"];
   
   

   useEffect(() => {
      const clickOutside = (event: any) => {
         if (!event.path.includes(popupRef.current)) {
            setOpenPopup(false);
         }
      };
      document.body.addEventListener("click", clickOutside);
      return () => {document.body.removeEventListener("click", clickOutside);}
   }, []);
   
   const selectedSort = (i: number) => {
      dispatch(setSelectSort(i));
      setOpenPopup(false);
   };

   return (           
      <>
         <div className="nav__sort__flex" ref={popupRef}>
            <div className="nav__sort__img">
               <div className="nav__sort__img"></div>
            </div>
            <div className="nav__sort__text">
               <div className="nav__sort__text">sorting by:</div>
            </div>
            <div className="nav__sort__menu" onClick={() => setOpenPopup(!openPopup)}>{selectSort == undefined ? listsort[0] : `${listsort[selectSort]}`}</div>
         </div>
         {openPopup && (
         <div className="nav__sort__popup">
            {listsort.map((sort, i: number) =>
            <div className={selectSort == i ? "sort__popup activesort" : "sort__popup"} onClick={() => selectedSort(i)} key={i}>
               <div className="sort__popup__text"><br></br>{sort}</div>
            </div>
            )} 
         </div>
         )
         }
      </>
   );
}

export default Sort;