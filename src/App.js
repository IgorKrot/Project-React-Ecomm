import { Routes, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";

import '../src/scss/main/generalstyles.scss';
import Home from '../src/pages/Home';
import Header from '../src/components/Header';
import NotFound from './pages/NotFound';
import Cart from '../src/components/Cart';
import Thanksfororder from '../src/pages/Thanksfororder';
import EmptyCart from './pages/EmptyCart';


function App() {

  return (
   <div className="App">
      <div className="wrapper">
         {/* <dataContext.Provider value={{searchQuery, setSearchQuery, value, setValue}}>  */}
            <div className="content">
               <Header />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="index.html" element={<Home />} />
                  <Route path="Cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/pay" element={<Thanksfororder />} />
               </Routes>
            </div>
         {/* </dataContext.Provider> */}
      </div>
   </div>
  );
}

export default App;










// const [searchQuery, setSearchQuery] = useState("");
// const [currentPage, setCurrentPage] = useState("1");
// const [value, setValue] = useState("");