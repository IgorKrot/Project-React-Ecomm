import {useEffect, useMemo} from "react"
import {createPortal} from "react-dom"
import { useSelector } from 'react-redux'
import Survey from "../components/Survey"

const modalRootElement = document.querySelector("#modal");

function Portal () {
   const { isOpen } = useSelector((state) => state.portal);

   const element = useMemo(() => {
      const element = document.createElement("div");
      return element
   })

      useEffect(() => {
         modalRootElement.appendChild(element);

         return () => {
            modalRootElement.removeChild(element);
         }
      })

   return createPortal( 
      isOpen && 
         <Survey />, 
         element
   );
}

export default Portal;