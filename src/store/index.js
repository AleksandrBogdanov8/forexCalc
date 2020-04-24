import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { myAppReducer } from "./reducers/myAppReducer";

const rootReducer = combineReducers({
  myApp: myAppReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
