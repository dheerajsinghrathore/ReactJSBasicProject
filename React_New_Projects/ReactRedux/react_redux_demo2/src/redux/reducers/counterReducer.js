import { INCREMENT, DECREMENT, RESET, INCREMENT_BY_VALUE } from "../actions/actionType";
const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count > 0 ? state.count - 1 : 0,
      };
    case RESET:
      return {
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};
