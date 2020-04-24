import {
  LOAD_BALANCE,
  CHANGE_BALANCE,
  LOAD_DATA,
  ADD_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM,
} from "../types";

const initialState = {
  balance: 0,
  appItems: [],
};

export const myAppReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case LOAD_BALANCE:
      return { ...state, balance: action.payload };
    case CHANGE_BALANCE:
      return { ...state, balance: action.payload };
    case LOAD_DATA:
      return { ...state, appItems: action.payload };
    case ADD_ITEM:
      return { ...state, appItems: [...state.appItems, { ...action.payload }] };
    case REMOVE_ITEM:
      return {
        ...state,
        appItems: state.appItems.filter((p) => p.id !== action.payload),
      };
    case CHANGE_ITEM:
      return {
        ...state,
        appItems: state.appItems.filter((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };

    default:
      return state;
  }
};
