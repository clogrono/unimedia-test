import { createStore, combineReducers } from "redux";
import infoReducer from "../reducers/infoReducer";

const rootReducer = combineReducers({ info: infoReducer });

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
