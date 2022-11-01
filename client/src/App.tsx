import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/scss/main/generalstyles.scss';
import Home from '../src/pages/Home';
import Header from '../src/components/Header';
import NotFound from './pages/NotFound';
import Cart from '../src/components/Cart';
import Thanksfororder from '../src/pages/Thanksfororder';
import PizzaFullCart from "./components/PizzaFullCart";
import SurveyButton from "./components/SurveyButton";
import Portal from "./components/Portal";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import LoginReg from "./components/LoginReg";



function App() {
   return (
      <div className="App">
         <div className="wrapper">
               <div className="content">
                  <Header />
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="Cart" element={<Cart />} />
                     <Route path="*" element={<NotFound />} />
                     <Route path="/pay" element={<Thanksfororder />} />
                     <Route path="/:CardId" element={<PizzaFullCart />} />
                     <Route path="/auth" element={<Auth />} />
                     <Route path="/account" element={<Account />} />
                  </Routes>
                  <SurveyButton />
                  <LoginReg />
                  <Portal />
               </div>
         </div>
      </div>
   );
}

export default App;










// const [searchQuery, setSearchQuery] = useState("");
// const [currentPage, setCurrentPage] = useState("1");
// const [value, setValue] = useState("");
{/* <dataContext.Provider value={{searchQuery, setSearchQuery, value, setValue}}>  */}
{/* </dataContext.Provider> */}
{/* <Route path="index.html" element={<Home />} /> */}