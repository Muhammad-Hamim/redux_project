import { Route, Routes } from "react-router";
import HomeLayout from "./components/Layout/HomeLayout";
import HomePage from "./components/pages/HomePage";
import JobForm from "./components/Job Item/JobForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="add-job" element={<JobForm />} />
        <Route path="edit-job/:jobId" element={<JobForm />} />
      </Route>
    </Routes>
  );
};

export default App;
