import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setText } from "./Redux/createSlice"; // Import the action from store
import { Link } from "react-router-dom";
import "../Components/style.css";

const Firstpage = () => {
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState("");
  const [click, setClick] = useState(false); // State to track if submit button is clicked
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setText(input));
    setInput("");
    setAlert("Input field is submitted, check the redux output by clicking the button below");
    setClick(true); // Set click state to true after submitting
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>

      <div>{alert}</div>

      <div>
        {/* Conditionally disable the Output link based on click state */}
        <Link to="/output" className={`button ${!click && 'disabled'}`} disabled={!click}>
          Output
        </Link>
      </div>
    </div>
  );
};

export default Firstpage;
