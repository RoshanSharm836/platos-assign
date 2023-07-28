import { legacy_createStore } from "redux";
import reducerdata from "./reducer";

const Store = legacy_createStore(reducerdata);

export default Store;
