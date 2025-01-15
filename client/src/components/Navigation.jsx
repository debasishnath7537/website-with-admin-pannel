import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navigation;
