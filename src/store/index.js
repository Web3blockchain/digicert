import { createStore } from "redux";
import digicertReducer from '../reducer';

const store = createStore(digicertReducer);

export default store;