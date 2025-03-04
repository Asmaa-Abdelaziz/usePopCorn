import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" onSetRating={setMovieRating} />
      <p>This movie was rated with {movieRating} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={5}
    />
    <StarRating maxRating={5} color="red" size={20} defaultRating={2} />
    <Test/> */}
    <App />
  </React.StrictMode>
);
