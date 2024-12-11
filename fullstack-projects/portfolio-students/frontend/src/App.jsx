import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Register/Login";
import { useEffect, useState } from "react";
import Projects from "./components/Projects/Projects";

export default function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function verifyUser() {
      const response = await fetch("http://localhost:4000/api/users/verify", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      const data = await response.json();
      setUser(data);
    }

    verifyUser();
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/register");
  }

  return (
    <div className="App">
      <Navbar onLogout={handleLogout} setUser={setUser} user={user} />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Login setUser={setUser} />} />
      </Routes>
    </div>
  );
}
