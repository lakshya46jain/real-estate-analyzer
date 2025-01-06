import { useState } from "react";
import CityScape from "./components/CityScape";
import Form from "./components/Form";
import Map from "./components/Map";
import LocationSearchBar from "./components/LocationSearchBar";
import Output from "./components/Output";
import { LoadScript } from "@react-google-maps/api";

function PropertyDetailsPage() {
  const [mapCenter, setMapCenter] = useState({
    lat: 37.229572,
    lng: -80.41394,
  });

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA1gJwKnT0E0EKLDhMAGo0tTax13m-i5tw"
      libraries={["places"]}
    >
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
        >
          <h1
            style={{
              color: "#FFFFFF",
              paddingTop: "20px",
              fontSize: "30px",
              lineHeight: "1",
              fontWeight: "bolder", // Extra bold text
              fontFamily: "'League Spartan', sans-serif",
              padding: "17px 10px 10px 25px",
            }}
          >
            Real Estate Analyzer
          </h1>
        </div>

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
            margin: "3.5px 3.5px 0px 3.5px",
            boxSizing: "border-box",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "400px",
          }}
        >
          <h1
            style={{
              color: "#1E1E1E",
              textAlign: "center", // Center the text
              paddingTop: "20px",
              margin: "0", // Remove default margin
              fontSize: "calc(3vw + 22px)",
              lineHeight: "1",
              fontWeight: "bolder", // Extra bold text
              fontFamily: "'League Spartan', sans-serif",
              padding: "50px 0px 25px 0px",
            }}
          >
            <div>
              <span>Enter the following </span>
              <span
                style={{
                  color: "#DE6C83", // Separate color for "at the right price"
                  fontWeight: "bolder", // Extra bold text for this part
                }}
              >
                details:
              </span>
            </div>
          </h1>
          <div
            className="container text-center"
            style={{ margin: "25px 0px 25px 0px" }}
          >
            <div className="row">
              <div className="col">
                <Form />
                <LocationSearchBar setMapCenter={setMapCenter} />
                <Output />
              </div>
              <div className="col">
                {/* Google Maps Display */}
                <Map center={mapCenter} zoom={17} />
              </div>
            </div>
          </div>
          <CityScape />
        </div>
      </div>
    </LoadScript>
  );
}

export default PropertyDetailsPage;
