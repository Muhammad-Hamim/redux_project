import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
