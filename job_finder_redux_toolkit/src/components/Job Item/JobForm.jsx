import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { addJob, fetchJobById, updateJob } from "../../redux/features/JobsApi";
import { useEffect, useState } from "react";

const JobForm = () => {
  const { pathname } = useLocation();
  const { jobId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { job } = useSelector((state) => state.jobsReducer);
  const isEditing = pathname.includes("edit-job");

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    salary: "",
    deadline: "",
  });

  useEffect(() => {
    if (isEditing) {
      dispatch(fetchJobById(jobId));
    }
  }, [isEditing, jobId, dispatch]);

  useEffect(() => {
    if (isEditing && job?.id === Number(jobId)) {
      setFormData({
        title: job.title || "",
        type: job.type || "",
        salary: job.salary || "",
        deadline: job.deadline || "",
      });
    }
  }, [job, isEditing, jobId]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await dispatch(updateJob({ id: jobId, ...formData })).unwrap();
      } else {
        await dispatch(addJob(formData)).unwrap();
      }
      navigate("/");
    } catch (err) {
      console.error("Failed to save the job:", err);
    }
  };

  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
      <div className="lg:pl-[14rem] mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <h1 className="mb-10 text-center lws-section-title">
            {isEditing ? "Edit Job" : "Add New Job"}
          </h1>
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="fieldContainer">
                <label
                  htmlFor="lws-JobTitle"
                  className="text-sm font-medium text-slate-300"
                >
                  Job Title
                </label>
                <select
                  id="lws-JobTitle"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                >
                  <option value="" hidden>
                    Select Job
                  </option>
                  <option>Software Engineer</option>
                  <option>Software Developer</option>
                  <option>Full Stack Developer</option>
                  <option>MERN Stack Developer</option>
                  <option>DevOps Engineer</option>
                  <option>QA Engineer</option>
                  <option>Product Manager</option>
                  <option>Social Media Manager</option>
                  <option>Senior Executive</option>
                  <option>Junior Executive</option>
                  <option>Android App Developer</option>
                  <option>IOS App Developer</option>
                  <option>Frontend Developer</option>
                  <option>Frontend Engineer</option>
                </select>
              </div>
              <div className="fieldContainer">
                <label htmlFor="lws-JobType">Job Type</label>
                <select
                  id="lws-JobType"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="" hidden>
                    Select Job Type
                  </option>
                  <option>Full Time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>
              <div className="fieldContainer">
                <label htmlFor="lws-JobSalary">Salary</label>
                <div className="flex border rounded-md shadow-sm border-slate-600">
                  <span className="input-tag">BDT</span>
                  <input
                    type="number"
                    name="salary"
                    id="lws-JobSalary"
                    value={formData.salary}
                    onChange={handleChange}
                    required
                    className="!rounded-l-none !border-0"
                    placeholder="20,00,000"
                  />
                </div>
              </div>
              <div className="fieldContainer">
                <label htmlFor="lws-JobDeadline">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  id="lws-JobDeadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  id="lws-submit"
                  className="cursor-pointer btn btn-primary w-fit"
                >
                  {isEditing ? "Edit Job" : "Add Job"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobForm;
