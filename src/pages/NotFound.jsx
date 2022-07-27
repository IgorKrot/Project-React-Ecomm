import React from 'react';
import { Link } from "react-router-dom";

            
function NotFound() {
   return (           
      <div className="NotFound">   
         <div className="NotFound__body">Page not found</div>
         <Link to="/index.html">
         <button className="NotFound__Button">
            <div className="NotFound__Button__text">go back</div>
         </button>
         </Link>
      </div>   
  );
}

export default NotFound;