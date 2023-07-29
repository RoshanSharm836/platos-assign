import { applyMiddleware, legacy_createStore } from "redux";
import reducerdata from "./reducer";
import thunk from "redux-thunk";
const Store = legacy_createStore(reducerdata, applyMiddleware(thunk));

export default Store;
