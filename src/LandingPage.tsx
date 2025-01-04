import CityScape from "./components/CityScape";
import GetStartedButton from "./components/GetStartedButton";
import LandingText from "./components/LandingText";

function LandingPage() {
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
            borderColor: "#0B2564",
            borderWidth: "3px",
            borderStyle: "solid",
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
          <LandingText />

          <GetStartedButton />

          <CityScape />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
