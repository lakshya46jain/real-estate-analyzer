import cityScape from "/city_scape.png";

function CityScape() {
  return (
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
  );
}

export default CityScape;
