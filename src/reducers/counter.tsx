import { ModifyAction } from "../actions/counterAction";
import { DECREMENT, INCREMENT } from "../constants/counter";
import { StoreState } from "../types";

let initState: StoreState = { number: 0 };
// 处理并返回 state
export default (
  state: StoreState = initState,
  action: ModifyAction
): StoreState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, number: state.number + 1 };
    case DECREMENT:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};
