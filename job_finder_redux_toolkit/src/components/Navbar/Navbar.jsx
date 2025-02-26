import { Link } from "react-router";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="mx-auto py-4 w-full px-4 bg-[#1E293B]">
      <Link to={"/"}>
        <img src={logo} alt="Job Finder Logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
