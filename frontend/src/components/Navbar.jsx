import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", backgroundColor: "#282c34", color: "white" }}>
      <h2>MERN App</h2>
      <div>
        {!isLoggedIn ? (
          <>
            <Link to="/login" style={{ marginRight: "10px", color: "white" }}>Login</Link>
            <Link to="/register" style={{ color: "white" }}>Register</Link>
          </>
        ) : (
          <>
            <Link to="/home" style={{ marginRight: "10px", color: "white" }}>Home</Link>
            <button onClick={handleLogout} style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
