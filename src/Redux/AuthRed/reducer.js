import { ADD_PRODUCT } from "../ProductRed/actions";

const init = {
   products: [],
};

export const reducer = (store = init, action) => {
   switch (action.type) {
      case ADD_PRODUCT:
         return { ...store, todos: [...store.products, action.payload] };
      default:
         return { ...store };
   }
};
