import cityScape from "/city_scape.png";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex", // Enable flexbox
          flexDirection: "column", // Stack children vertically
          height: "100vh", // Full height of the viewport
          margin: "0", // Remove default margin
          boxSizing: "border-box", // Ensure consistent sizing
        }}
      >
        {/* Navigation Bar */}
        <div
          style={{
            maxWidth: "100vw",
            height: "60px", // Fixed height
            backgroundColor: "#1E1B18",
            borderRadius: "40px",
            margin: "3.5px",
            boxSizing: "border-box",
          }}
        ></div>

        {/* Body */}
        <div
          style={{
            maxWidth: "100vw",
            flex: 1,
            background: "linear-gradient(to bottom, #0B2564, #1E1B18)",
            borderRadius: "40px 40px 0px 0px",
            margin: "0px 3.5px 0px 3.5px",
            boxSizing: "border-box",
            position: "relative",
            display: "flex", // Flexbox for aligning text
            flexDirection: "column", // Align text vertically
            justifyContent: "center", // Vertically center the text
            alignItems: "center", // Horizontally center the text
            paddingBottom: "400px", // Space from the bottom (to avoid overlap with image)
          }}
        >
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

          <img
            src={cityScape}
            alt="City Scape"
            style={{
              position: "absolute", // Position the image at the bottom
              bottom: "0", // Fix the image at the bottom of the div
              maxWidth: "100%", // Make the image take the full width
              height: "auto", // Keep the aspect ratio intact
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
