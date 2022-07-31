import React from 'react';  
import { useDispatch, useSelector } from 'react-redux'

import { setCurrentPage } from '../redux/slices/categorySlice'   

            
function Pagination () {
   const currentPage = useSelector(state => state.filter.currentPage);
   const dispatch = useDispatch();
   
   return (           
      <footer className='footer__pagination'>
         <div className="footer__pagination__flex">
           <div className={currentPage == 1 ? "footer__pagination__button pagination__select" : "footer__pagination__button"} onClick={() => {dispatch(setCurrentPage(1)); window.scrollTo(0, 0);} }>
               <div className='pagination__text'>1</div>
           </div>  
           <div className={currentPage == 2 ? "footer__pagination__button pagination__select" : "footer__pagination__button"} onClick={() => {dispatch(setCurrentPage(2)); window.scrollTo(0, 0);}}>
               <div className='pagination__text'>2</div>
           </div>  
         </div>  
      </footer>
  );
}

export default Pagination;  