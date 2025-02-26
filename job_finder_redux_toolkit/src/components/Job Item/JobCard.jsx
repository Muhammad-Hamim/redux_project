import { Square } from "lucide-react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { deleteJob } from "../../redux/features/JobsApi";

const JobCard = ({ job }) => {
  const dispatch = useDispatch();
  const handleJobDelete = () => {
    if (job.id) {
      dispatch(deleteJob(job.id));
    } else {
      return <p>Something went wrong</p>;
    }
  };

  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{job.title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            {/* Fulltime - #FF8A00,  */}
            {/* Internship - #FF5757,  */}
            {/* Remote - #56E5C4,  */}
            <Square
              className={`w-4 mr-2 ${
                job.type === "Internship"
                  ? "text-[#FF5757]"
                  : job.type === "Remote"
                  ? "text-[#56E5C4]"
                  : "text-[#FF8A00]"
              }`}
            />
            {job.type}
          </div>
          <div className="lws-salary">
            <span className="text-slate-400 mr-1.5">BDT</span>
            {job.salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5" />
            Closing on {job.deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <Link
            to={`/edit-job/${job.id}`}
            type="button"
            className="lws-edit btn btn-primary"
          >
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2" />
            Edit
          </Link>
        </span>
        <span className="sm:ml-3">
          <button
            onClick={handleJobDelete}
            type="button"
            className="lws-delete btn btn-danger "
          >
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2" />
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default JobCard;

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
};
