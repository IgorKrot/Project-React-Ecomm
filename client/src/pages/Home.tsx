import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import qs from 'qs';

import { fetchProducts } from '../redux/slices/productSlice' 
import { setFilters } from '../redux/slices/categorySlice' 
import Category from '../../src/components/Category';
import Sort from '../../src/components/Sort';
import Productcard from '../../src/components/Productcard';
import Pagination from '../components/Pagination';
import { RootState, useAppDispatch } from '../redux/store';


function Home() {
   const { items } = useSelector((state: RootState) => state.product);
   const {searchQuery, buttonIndex, selectSort, currentPage} = useSelector((state: RootState) => state.filter);

   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const categorylist: string[] = ["All", "Meat", "Vegetarian", "Cheese", "Mushroom"];

   const isMounted = useRef<boolean>(false);

   
   useEffect(() => {
      if (window.location.search) {
         const params: any = qs.parse(window.location.search.substring(1));
         dispatch(setFilters({...params}));
      };
   }, []);


   useEffect(() => {
      async function queryPizzas () {
         dispatch(fetchProducts({
            buttonIndex, 
            selectSort, 
            searchQuery, 
            currentPage,
         })); 
      }
      queryPizzas();
   }, [buttonIndex, selectSort, searchQuery, currentPage]);


   useEffect(() => {
      if (isMounted.current) {
      const queryString = qs.stringify({
         buttonIndex, 
         selectSort,  
         currentPage,
         searchQuery,
      });
      navigate(`?${queryString}`);
      }
      isMounted.current = true;
   }, [buttonIndex, selectSort, currentPage, searchQuery]);


   return (
      <>
         <nav className="nav">
            <nav className="nav__flex">
               <Category />
               <Sort />
            </nav>
         </nav>
         <h1>{categorylist[buttonIndex]} pizzas</h1>
         <main className="product__card__flex">
            {items.map((card, id) =>
            <Productcard {...card} key={card.id}/>)}
         </main>
         <Pagination />
      </>
   );
   }

export default Home;


















   // buttonIndex: buttonIndex === 0 ? buttonIndex :`${buttonIndex.payload}`, 
   // selectSort: selectSort === 0 ? selectSort :`${selectSort.payload}`,


   //const [items, setItems] = useState([]);

   // const {value} = useContext(dataContext);
   //const [isLoading, setIsLoading] = useState(true);

   // useEffect(() => {
   //    fetch(`https://62bef7450bc9b1256164277e.mockapi.io/items?${buttonIndex.payload > 0 ? `category=${buttonIndex.payload}` : ""}&${selectSort.payload > 0 ? 'sortBy=price' : 'sortBy=rating'}&order=desc&${searchQuery ? `search=${searchQuery}` : ""}&page=${currentPage}&limit=8`).then((res) => {return res.json();}).then((arr) => {setItems(arr);
   // });
   // }, [buttonIndex, selectSort, searchQuery, currentPage]);

   /*buttonIndex={buttonIndex} setButtonIndex={setButtonIndex}*/
   /*selectSort={selectSort} setSelectSort={setSelectSort}*/
   //const [buttonIndex, setButtonIndex] = useState("0");
   //const [selectSort, setSelectSort] = useState(0);
   // import pizzas from '../assets/pizzas.json';


   // useEffect(() => {
   //    async function queryPizzas () {
   //    // try {
   //    // const {data} = await axios.get(`https://62bef7450bc9b1256164277e.mockapi.io/items?${buttonIndex.payload > 0 ? `category=${buttonIndex.payload}` : ""}&${selectSort.payload > 0 ? 'sortBy=price' : 'sortBy=rating'}&order=desc&${searchQuery ? `search=${searchQuery}` : ""}&page=${currentPage}&limit=8`);
   //    // dispatch(addProducts(data));
   //    // //setItems(data);
   //    // } catch (error) {
   //    // console.log(error);
   //    // alert("sorry, pizzas is not exist");
   //    // } finally {
   //    //   console.log("get query its okey");
   //    // }
   //    }
   //    queryPizzas ()
   // // axios.get(`https://62bef7450bc9b1256164277e.mockapi.io/items?${buttonIndex.payload > 0 ? `category=${buttonIndex.payload}` : ""}&${selectSort.payload > 0 ? 'sortBy=price' : 'sortBy=rating'}&order=desc&${searchQuery ? `search=${searchQuery}` : ""}&page=${currentPage}&limit=8`).then((res) => {setItems(res.data);});
   // }, [buttonIndex, selectSort, searchQuery, currentPage]);
// import axios from 'axios';
   // axios.get(`https://62bef7450bc9b1256164277e.mockapi.io/items?${buttonIndex.payload > 0 ? `category=${buttonIndex.payload}` : ""}&${selectSort.payload > 0 ? 'sortBy=price' : 'sortBy=rating'}&order=desc&${searchQuery ? `search=${searchQuery}` : ""}&page=${currentPage}&limit=8`).then((res) => {setItems(res.data);});
      // const {currentPage, setCurrentPage} = useContext(dataContext); /* перенести в редакс*/