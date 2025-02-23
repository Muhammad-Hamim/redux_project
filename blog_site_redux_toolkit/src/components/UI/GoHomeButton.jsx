import { Link } from "react-router";
import { House } from "lucide-react";

const GoHomeButton = () => {
  return (
    <div className="container mt-8">
      <Link
        to={"/"}
        className="flex items-center gap-2 text-gray-600 home-btn"
        id="lws-goHome"
      >
        <House />
        Go Home
      </Link>
    </div>
  );
};

export default GoHomeButton;
