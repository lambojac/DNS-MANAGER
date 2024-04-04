import React, { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Destructure email and password from formState
      const { email, password } = formState;
      
      // Send a post request to the backend signup endpoint
      const response = await axios.post("http://localhost:3000/signup", { email, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      />

      <button type="submit">Sign Up</button>

      {message && (
        <p className="text-success">{message}</p>
      )}
    </form>
  );
}

export default SignupForm;
