import { createStore } from "redux";
import flightReducer from "./flightBook/flightBookReducer";

export const store = createStore(flightReducer);