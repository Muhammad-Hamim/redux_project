import { Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
