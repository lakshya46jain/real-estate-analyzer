import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GetStartedButton() {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/price-predictor"); // Navigate to the property details page
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-link"
        onMouseEnter={() => setIsHovered(true)} // On hover, set isHovered to true
        onMouseLeave={() => setIsHovered(false)} // On mouse leave, set isHovered to false
        style={{
          color: "#FFFFFF",
          textDecoration: isHovered ? "underline" : "none", // Change text decoration on hover
          fontSize: "20px",
          fontFamily: "'League Spartan', sans-serif",
          margin: "15px",
        }}
        onClick={handleGetStartedClick}
      >
        Get Started →
      </button>
    </div>
  );
}

export default GetStartedButton;
