import { ADD_FLIGHT, DELETE_FLIGHT } from "./actions";

export const addFlight = (flightInfo) => {
  return {
    type: ADD_FLIGHT,
    payload: flightInfo,
  };
};

export const deleteFlight = (flightId) => {
  return {
    type: DELETE_FLIGHT,
    payload: flightId,
  };
};
