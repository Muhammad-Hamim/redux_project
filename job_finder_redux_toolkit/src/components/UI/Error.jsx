import PropTypes from "prop-types";

const Error = ({ errorMessage }) => {
  return (
    <div className="bg-red-300 p-4 w-full">
      <p className="text-2xl text-red-600 text-center">{errorMessage}</p>
    </div>
  );
};

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default Error;
