import CityScape from "./components/CityScape";

function PropertyDetails() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          margin: "0",
          boxSizing: "border-box",
        }}
      >
        {/* Navigation Bar */}
        <div
          style={{
            maxWidth: "100vw",
            height: "60px",
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
            background: "#FFFFFF",
            borderRadius: "40px 40px 0px 0px",
            margin: "0px 3.5px 0px 3.5px",
            boxSizing: "border-box",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "400px",
          }}
        >
          <CityScape />
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;
