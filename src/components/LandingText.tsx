function LandingText() {
  return (
    <h1
      style={{
        color: "#FFFFFF", // White text color
        textAlign: "center", // Center the text
        paddingTop: "20px",
        margin: "0", // Remove default margin
        fontSize: "calc(3vw + 22px)",
        lineHeight: "1",
        fontWeight: "bolder", // Extra bold text
        fontFamily: "'League Spartan', sans-serif",
      }}
    >
      <div>Explore your new home</div>
      <div>
        <span>with us, </span>
        <span
          style={{
            color: "#DE6C83", // Separate color for "at the right price"
            fontWeight: "bolder", // Extra bold text for this part
          }}
        >
          at the right price
        </span>
      </div>
    </h1>
  );
}

export default LandingText;
