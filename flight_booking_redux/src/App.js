import { useDispatch, useSelector } from "react-redux";
import frame from "./assets/icons/Frame.svg";
import vector1 from "./assets/icons/Vector1.svg";
import vector3 from "./assets/icons/Vector3.svg";
import logo from "./assets/lws-logo.svg";
import { addFlight, deleteFlight } from "./redux/flightBook/actions";

const App = () => {
  const flights = useSelector((state) => state.flights);
  const dispatch = useDispatch();

  const handleFlightDelete = (id) => {
    dispatch(deleteFlight(id));
  };

  const handleAddFlight = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const flight = {
      from: formData.get("from"),
      to: formData.get("to"),
      date: formData.get("date"),
      guests: formData.get("guests"),
      class: formData.get("ticketClass"),
    };
    dispatch(addFlight(flight));
    console.log(flight);
  };

  return (
    <div>
      <header id="header">
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>
      <section>
        {/* Input Data */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form
              className="first-hero lws-inputform"
              onSubmit={handleAddFlight}
            >
              {/* From */}
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src={frame} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>
              {/* To */}
              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src={frame} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>
              {/* Date */}
              <div className="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  className="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  required
                />
              </div>
              {/* Guests */}
              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src={vector1} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value={1}>1 Person</option>
                    <option value={2}>2 Persons</option>
                    <option value={3}>3 Persons</option>
                    <option value={4}>4 Persons</option>
                  </select>
                </div>
              </div>
              {/* Class */}
              <div className="des-from !border-r-0">
                <p>Class</p>
                <div className="flex flex-row">
                  <img src={vector3} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="ticketClass"
                    id="lws-ticketClass"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>
              <button className="addCity" type="submit" id="lws-addCity">
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>
        {/* Preview Data */}
        <div className="table-container">
          <table className="booking-table">
            <thead className="bg-gray-100/50">
              <tr className="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th className="text-center">Journey Date</th>
                <th className="text-center">Guests</th>
                <th className="text-center">Class</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody
              className="divide-y divide-gray-300/20"
              id="lws-previewBooked"
            >
              {/* Row 1 */}
              {flights.map((flight) => (
                <tr key={flight.id} className="lws-bookedTable text-black">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <p className="lws-bookedFrom">{flight.from}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="lws-bookedTo">{flight.to}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <p className="lws-bookedDate">{flight.date}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <p className="lws-bookedGustes">{flight.guests}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="lws-bookedClass"> {flight.class} </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleFlightDelete(flight.id)}
                        className="lws-remove"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default App;
