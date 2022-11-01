import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { setButtonIndex } from '../redux/slices/categorySlice'   
import { RootState } from '../redux/store';


function Category() {
   const buttonIndex = useSelector((state: RootState) => state.filter.buttonIndex);
   const dispatch = useDispatch();

   const categorylist: string[] = ["All", "Meat", "Vegetarian", "Cheese", "Mushroom"];
   
   return (           
   <ul className="nav__category__flex">
      {categorylist.map((categoryname, i: number) =>
      <li className={buttonIndex == i ? "nav__categories activecategory" : "nav__categories"} key={i} onClick={() => dispatch(setButtonIndex(i))}>
         <div className="nav__categories__text" key={i}>{categorylist[i]}</div>
      </li>
      )}
   </ul>
   );
}

export default Category;























// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import {setButtonIndex1, buttonIndex1 } from '../redux/slices/categorySlice'   

// function Category({setButtonIndex, buttonIndex}) {
//    //const [buttonIndex, setButtonIndex] = useState("0");
//    const categorylist = ["All", "Meat", "Vegetarian", "Cheese", "Mushroom"];
//    const changeColor = (index) => {
//       setButtonIndex(index)
//    };

//    // const count = useSelector(state => state.buttonIndex1.value)
//    // const dispatch = useDispatch()
//    //dispatch(setButtonIndex1(i))
   
//    return (           
//    <ul className="nav__category__flex">
//       {categorylist.map((categoryname, i) =>
//       <li className={buttonIndex == [i] ? "nav__categories activecategory" : "nav__categories"} key={i} onClick={() => changeColor(i)}>
//          <div className="nav__categories__text" key={i}>{categorylist[i]}</div>
//       </li>
//       )}
//    </ul>
//   );
// }

// export default Category;



