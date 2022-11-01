export const calcTotalCostFromLS = (items: any) => {
   return items.reduce((sumPrice: any, currentPrice: any) => {return sumPrice + (currentPrice.price * currentPrice.count)},
      0);
};
