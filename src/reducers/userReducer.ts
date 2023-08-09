import { CHANGE_NAME, RESET_PROFILE } from "../types/actionTypes";

const initialState = { name: "Haris", age: 25 };

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    case RESET_PROFILE:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
