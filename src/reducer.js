// Initial State of data layer, in this case empty basket
export const initialState = {
  basket: [],
};

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

    default:
      return state;
  }
};

export default reducer;
