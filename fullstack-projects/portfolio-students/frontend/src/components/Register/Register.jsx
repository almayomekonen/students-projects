import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const data = await response.json();
      setMessage(data.message);
      console.log(data);
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    }

    console.log(formData);
  };

  return (
    <div className="register-container">
      <h1>Register-Form</h1>

      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
          value={formData.name}
        />

        <label htmlFor="name">E-mail:</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your E-mail"
          required
          value={formData.email}
        />

        <label htmlFor="name">Password:</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          required
          value={formData.password}
        />

        <button type="submit">Register</button>
        <Link to="/">have an account ?</Link>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
