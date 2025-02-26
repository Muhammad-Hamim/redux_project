import { Briefcase, FilePlus2Icon, Square } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { setFilter } from "../../redux/features/filter job/filterJobsSlice";

const Sidebar = () => {
  const filterByJobType = useSelector((state) => state.filterReducer.filter);
  const dispatch = useDispatch();
  const onFilterByJobType = (jobType) => {
    dispatch(setFilter(jobType));
  };
  return (
    <aside>
      <div className="sidebar">
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => onFilterByJobType("")}
                className="main-menu flex items-center gap-2 menu-active"
                id="lws-alljobs-menu"
              >
                <Briefcase />
                <span> All Available Jobs</span>
              </button>
              <ul className="space-y-6 lg:space-y-2 ">
                <li>
                  <button
                    onClick={() => onFilterByJobType("Internship")}
                    className={`sub-menu ${
                      filterByJobType === "Internship" ? "filter-active" : ""
                    }`}
                    id="lws-internship-menu"
                  >
                    <Square className="!text-[#FF5757] w-4" />
                    Internship
                  </button>
                </li>
                <li>
                  <button
                    className={`sub-menu ${
                      filterByJobType === "Full Time" ? "filter-active" : ""
                    }`}
                    onClick={() => onFilterByJobType("Full Time")}
                    id="lws-fulltime-menu"
                  >
                    <Square className="!text-[#FF8A00] w-4" />
                    Full Time
                  </button>
                </li>
                <li>
                  <button
                    className={`sub-menu ${
                      filterByJobType === "Remote" ? "filter-active" : ""
                    }`}
                    onClick={() => onFilterByJobType("Remote")}
                    id="lws-remote-menu"
                  >
                    <Square className="!text-[#56E5C4] w-4" />
                    Remote
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"add-job"} className="main-menu" id="lws-addJob-menu">
                <FilePlus2Icon />
                <span>Add NewJob</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
