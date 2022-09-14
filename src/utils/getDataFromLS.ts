import { calcTotalCostFromLS } from "../../src/utils/calcTotalCostFromLS"
import { CartItem } from "../redux/slices/cartSlice";
import { ProductItem } from "../redux/slices/productSlice";

export const getDataFromLS = () => {
   const data = localStorage.getItem("cart");
   const items = data ? JSON.parse(data) : [];
   const totalCost = calcTotalCostFromLS(items);
   
   return {items, totalCost,};
};