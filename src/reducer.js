export const initialState = {
  basket: [
    {
      id: "3525373",
      title: "New apple",
      price: 34.87,
      rating: 4,
      image:
        "https://m.media-amazon.com/images/S/aplus-media/sota/5c0954f2-54f8-4744-86b4-9a1d85d97e5c._CR0,0,800,600_PT0_SX800__.jpg",
    },
  ],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //remove item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket
        newBasket.splice(index, 1);
      } else {
        console.log("cant remove");
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
/*
 */
