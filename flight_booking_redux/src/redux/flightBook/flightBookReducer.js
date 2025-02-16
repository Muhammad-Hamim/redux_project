import { ADD_FLIGHT, DELETE_FLIGHT } from "./actions";

//initialize the initial state
const initialState = {
  flights: [],
};

//crate reducer function
const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLIGHT:
      const newId =
        state.flights.length > 0
          ? state.flights[state.flights.length - 1]?.id + 1
          : 1;
      return {
        ...state,
        flights: [...state.flights, { id: newId, ...action.payload }],
      };
    case DELETE_FLIGHT:
      return {
        ...state,
        flights: state.flights.filter((flight) => flight.id !== action.payload),
      };
    default:
      return state; // Ensure the state is returned by default
  }
};

export default flightReducer;
