// Initial State of data layer, in this case empty basket
export const initialState = {
  basket: [],
  user: null,
};

//Selector
//In this case we take in the basket. Reduce goes through each value and tallies up all item prices and adds
// it in to the final amount. Starts on 0.
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//State of application, and an action e.g. add to basket remove from basket ...
//... means keeps original as it is , action.item means what to add to the end
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        // go to new basket and splice at that element index and then the number of items to delete
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
