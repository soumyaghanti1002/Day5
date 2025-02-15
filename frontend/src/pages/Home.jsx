import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";  // Import CSS

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (!storedUser) {
      navigate("/login");
    } else {
      setUsername(storedUser);
    }
  }, []);

  return (
    <div className="container">
      <h2 className="welcome-text">Welcome, {username}!</h2>
      <button onClick={() => { localStorage.removeItem("username"); navigate("/login"); }}>Logout</button>
    </div>
  );
};

export default Home;
