import {ADD_SIZE} from "../Actions/Action"
import products from "../../API/api"

const initialstate = {
    productss:[],
};
const SizeReducer = (state = initialstate, action) => {
  console.log(action,"action")
    switch (action.type) {
      case ADD_SIZE:
        return {
          ...state,
          productss: products.map(product =>
            product.size === action.size ? {...product, selected: true} : product,
          ),
        };
        default:
            return state;
        }
      };

      export default SizeReducer;