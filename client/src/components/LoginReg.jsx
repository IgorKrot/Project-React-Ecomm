import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {setLogin} from '../redux/slices/dataAuthSlice'



function LigonReg() {
   const {login} = useSelector((state) => state.auth);

   const dispatch = useDispatch();
   let navigate = useNavigate();

   const logOut = () => {
      dispatch(setLogin(false));
      navigate("/");
   }


   return ( 
      <div className="login_main">
         {login ?
               <div className="buttons_bLock_flex">
                  <Link to="/account">
                     <button className="button_left">
                        <div className="button_left_text">Acc</div>
                     </button>
                  </Link>
                  <Link to="/auth">
                     <button className="button_right" onClick={() => logOut()}>
                        <div className="button_right_text">Exit</div>
                     </button>
                  </Link>
               </div>
            :
            <div className="buttons_bLock_flex_single">
                  <Link to="/auth">
                     <button className="button_right_single">
                        <div className="button_right_text_single">sign in</div>
                     </button>
                  </Link>
               </div>
            }
      </div>
   );
}

export default LigonReg;