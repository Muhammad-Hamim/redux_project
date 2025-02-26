import { useDispatch, useSelector } from "react-redux";
import JobCard from "../Job Item/JobCard";
import { useEffect } from "react";
import { fetchJobs } from "../../redux/features/JobsApi";
import Sidebar from "../Sidebar/Sidebar";
import {
  setSearch,
  setSortBySalary,
} from "../../redux/features/filter job/filterJobsSlice";

const HomePage = () => {
  const { jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobsReducer
  );
  const { filter, search, sortBySalary } = useSelector(
    (state) => state.filterReducer
  );
  const dispatch = useDispatch();

  const handleSearchStr = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSalarySort = (e) => {
    dispatch(setSortBySalary(e.target.value));
  };

  // Single useEffect for all cases
  useEffect(() => {
    dispatch(
      fetchJobs({ searchString: search, sortBySalary, filterByJobType: filter })
    );
  }, [dispatch, search, sortBySalary, filter]);

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <Sidebar />
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
          <h1 className="lws-section-title">All Available Jobs</h1>
          <div className="flex gap-4">
            <div className="search-field group flex-1">
              <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500" />
              <input
                type="text"
                placeholder="Search Job"
                className="search-input"
                onChange={handleSearchStr}
                value={search}
                id="lws-searchJob"
              />
            </div>
            <select
              id="lws-sort"
              name="sort"
              autoComplete="sort"
              onChange={handleSalarySort}
              value={sortBySalary}
              className="flex-1"
            >
              <option value="">Default</option>
              <option value="low">Salary (Low to High)</option>
              <option value="high">Salary (High to Low)</option>
            </select>
          </div>
        </div>
        <div className="jobs-list">
          {isLoading ? (
            <p className="w-full p-3 text-gray-300 text-center">Loading...</p>
          ) : isError ? (
            <p className="w-full p-3 text-red-500 text-center">
              Error: {error}
            </p>
          ) : jobs?.length > 0 ? (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="w-full p-3 text-gray-600 text-2xl text-center">
              No jobs found!
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
