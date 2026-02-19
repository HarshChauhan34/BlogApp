import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="logo" to="/">
          <FileText size={24} />
          BlogApp
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/add">Add Post</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
