export const ADD_FLIGHT = "ADD_FLIGHT";
export const DELETE_FLIGHT = "DELETE_FLIGHT";

export const addFlight = (flight) => ({
  type: ADD_FLIGHT,
  payload: flight,
});

export const deleteFlight = (id) => ({
  type: DELETE_FLIGHT,
  payload: id,
});
