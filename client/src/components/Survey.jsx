import { useSelector, useDispatch } from 'react-redux'
import {setModalOpen, setIndex, setScores} from "../redux/slices/portalSlice"


function Survey () {
   const { isOpen, scores, index } = useSelector((state) => state.portal);
   const dispatch = useDispatch();

   const questions = ["Do you like my project?", "Will you cook something delicious this Friday?", "Is the Herald of Rivia afraid of portals?", {"krasava": "Great) Hope you're smiling) If not, smile like this 😋", "pochtiKrasava": "Thanks. If you don't mind, give feedback on my site on telegram. @kamrad911"}];
   let comment = (scores == 3) ? questions[3].krasava : questions[3].pochtiKrasava;

   return (
         <div className="modal_main">
            <div className="modal_content">
               <div className="modal_text_area">
                  <div className="modal_text">{(index <= 2) ? questions[index] : comment}</div>
               </div>
               {(index === 3) || (<div className="modal_buttons_flex">
                  <button className="modal_button_left">
                     <div className="modal_button_left_text" onClick={() => {dispatch(setIndex(index + 1)); dispatch(setScores(scores + 1))}}>yes</div>
                  </button>
                  <button className="modal_button_right">
                     <div className="modal_button_left_right" onClick={() => dispatch(setIndex(index + 1))}>no</div>
                  </button>
               </div>)}
            </div>
            <div className="close_modal" onClick={() => dispatch(setModalOpen(!isOpen))}></div>
         </div>
   );
}

export default Survey;