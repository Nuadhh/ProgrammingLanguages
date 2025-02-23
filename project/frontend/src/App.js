
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // State for login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  // State for reviews
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      if (response.data.success) {
        setLoggedIn(true);
        setMessage(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Server error");
      }
    }
  };

  // Handle review submission
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/reviews", {
        review,
        user: username,
      });
      if (response.data.success) {
        setMessage(response.data.message);
        setReview("");
        fetchReviews();
      }
    } catch (error) {
      setMessage("Error submitting review");
    }
  };

  // Fetch all reviews from the backend
  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/reviews");
      setReviews(response.data.reviews);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch reviews after successful login
  useEffect(() => {
    if (loggedIn) {
      fetchReviews();
    }
  }, [loggedIn]);

  return (
    <div style={{ margin: "20px" }}>
      <h1>Simple Review App</h1>
      <p style={{ color: "green" }}>{message}</p>

      {!loggedIn ? (
        <form onSubmit={handleLogin} style={{ marginBottom: "20px" }}>
          <h2>Login</h2>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <>
          <form onSubmit={handleReviewSubmit} style={{ marginBottom: "20px" }}>
            <h2>Write a Review</h2>
            <textarea
              rows="4"
              cols="50"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <br />
            <button type="submit">Submit Review</button>
          </form>

          <h2>All Reviews</h2>
          <ul>
            {reviews.map((r, index) => (
              <li key={index}>
                <strong>{r.user}:</strong> {r.review}{" "}
                <em>({new Date(r.date).toLocaleString()})</em>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
