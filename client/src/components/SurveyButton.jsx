import { useDispatch, useSelector } from 'react-redux'
import {setModalOpen} from "../redux/slices/portalSlice"

function SurveyButton() {
   const dispatch = useDispatch();
   const { isOpen } = useSelector((state) => state.portal);


   return ( 
      <div className="survey_button_main" onClick={() => dispatch(setModalOpen(!isOpen))}>
         <div className="survey_button_content">
            <div className="survey_button_content_text">Click😇Me</div>
         </div>
      </div>
   );
}

export default SurveyButton;