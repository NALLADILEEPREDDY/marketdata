import { items } from "./data";

const initialState = {
  selectedImage: {},
  selectedMarket:'Hyderabad',
  marketData:items.Hyderabad
};
export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case "SELECTED_IMAGE":     
      return {
        ...state,
        selectedImage: action.payload,
      };
    case "SELECTED_MARKET":     
      return {
        ...state,
        selectedMarket: action.payload,
      };
    case "SELECTED_MARKET_DATA":     
      return {
        ...state,
        marketData: action.payload,
      };
    default:
      return state;
  }
}
