export const calcTotalCostFromLS = (items) => {
   return items.reduce((sumPrice, currentPrice) => {return sumPrice + (currentPrice.price * currentPrice.count)},
      0);
};
