export const buyProduct = (product) => ({
  type: 'BUY_PRODUCT',
  payload: product,
});

export const sellProduct = (product) => ({
  type: 'SELL_PRODUCT',
  payload: product,
});