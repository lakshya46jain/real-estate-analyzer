import { useState } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

interface Location {
  lat: number;
  lng: number;
}

interface Option {
  value: string;
  label: string;
}

function LocationSearchBar({
  setMapCenter,
}: {
  setMapCenter: (center: { lat: number; lng: number }) => void;
}) {
  const [address, setAddress] = useState<Option | null>(null); // Adjusted to store the Option type
  const [location, setLocation] = useState<Location | null>(null);

  const handleSelect = async (selectedOption: Option | null) => {
    setAddress(selectedOption);
    if (selectedOption) {
      try {
        const results = await geocodeByAddress(selectedOption.value);
        const latLng = await getLatLng(results[0]);
        setLocation(latLng);
        console.log("Latitude", latLng.lat, "Longitude", latLng.lng);
        setMapCenter({ lat: latLng.lat, lng: latLng.lng });
      } catch (error) {
        console.error("Error fetching geocoding details:", error);
      }
    }
  };

  return (
    <div className="input-group mb-3">
      <GooglePlacesAutocomplete
        apiKey="AIzaSyA1gJwKnT0E0EKLDhMAGo0tTax13m-i5tw"
        selectProps={{
          value: address,
          onChange: handleSelect,
          onInputChange: (inputValue) => {
            if (!inputValue) setLocation(null); // Reset location if input is cleared
          },
          styles: {
            dropdownIndicator: (provided) => ({
              ...provided,
              display: "none", // Hides the dropdown arrow
            }),
            indicatorSeparator: (provided) => ({
              ...provided,
              display: "none", // Hides the separator line
            }),
            control: (provided) => ({
              ...provided,
              color: "#FFFFFF",
              backgroundColor: "#0B2564",
              borderColor: "#0B2564",
              borderWidth: "2.5px",
              borderRadius: "25px 0px 0px 25px",
              padding: "0px 20px 0px 10px",
              fontFamily: "'League Spartan', sans-serif",
              width: "100%",
              textAlign: "left",
              ":hover": {
                borderColor: "#0B2564", // Hover outline color
              },
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "rgba(255, 255, 255, 0.65)",
              fontFamily: "'League Spartan', sans-serif",
              textAlign: "left",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "#FFFFFF",
              fontFamily: "'League Spartan', sans-serif",
              textAlign: "left",
            }),
            loadingIndicator: (provided) => ({
              ...provided,
              color: "#DE6C83",
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: "#0B2564", // Dropdown menu background color
              borderColor: "#0B2564", // Border color for dropdown
              textAlign: "left",
              zIndex: 10, // Ensure the dropdown appears on top
            }),
            menuList: (provided) => ({
              ...provided,
              color: "#FFFFFF", // Color of the list items
              fontFamily: "'League Spartan', sans-serif",
              textAlign: "left",
            }),
            loadingMessage: (provided) => ({
              ...provided,
              color: "#FFFFFF", // Change color for "Loading" text
              fontFamily: "'League Spartan', sans-serif",
            }),
            noOptionsMessage: (provided) => ({
              ...provided,
              color: "#FFFFFF", // Change color for "No Options" text
              fontFamily: "'League Spartan', sans-serif",
            }),
            input: (provided) => ({
              ...provided,
              color: "#FFFFFF",
              fontFamily: "'League Spartan', sans-serif",
              textAlign: "center",
            }),
          },
        }}
      />
      {location && (
        <div>
          Latitude: {location.lat}
          <br />
          Longitude: {location.lng}
        </div>
      )}
      <span
        className="input-group-text"
        id="basic-addon2"
        style={{
          backgroundColor: "#0B2564",
          color: "#FFFFFF",
          borderColor: "#DE6C83",
          borderWidth: "2.5px",
          borderRadius: "0px 25px 25px 0px",
          minWidth: "110px",
          padding: "2px 20px 2px 20px",
          fontFamily: "'League Spartan', sans-serif",
          justifyContent: "center",
        }}
      >
        Location
      </span>
    </div>
  );
}

export default LocationSearchBar;
