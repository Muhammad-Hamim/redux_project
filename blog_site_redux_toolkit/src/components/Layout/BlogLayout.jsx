import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";

const BlogLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default BlogLayout;
