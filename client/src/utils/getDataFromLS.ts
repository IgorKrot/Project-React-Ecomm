import { calcTotalCostFromLS } from "../../src/utils/calcTotalCostFromLS"

export const getDataFromLS = () => {
   const data = localStorage.getItem("cart");
   const items = data ? JSON.parse(data) : [];
   const totalCost = calcTotalCostFromLS(items);
   
   return {items, totalCost,};
};