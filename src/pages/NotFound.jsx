import React from 'react';
import { Link } from "react-router-dom";

import NotFoundscss from '../scss/components/modules/NotFoundscss.module.scss';


            
function NotFound() {
   return (           
      <div className={NotFoundscss.Notfound}>   
         <div className={NotFoundscss.header}>&#9785;<br></br>Page not found</div>
         <Link to="/index.html">
         <button className={NotFoundscss.footer}>
            <div className={NotFoundscss.footer1__text}>go back</div>
         </button>
         </Link>
      </div>   
  );
}

export default NotFound;