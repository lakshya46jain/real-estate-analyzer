import { StandaloneSearchBox } from "@react-google-maps/api";

interface Props {
  onLoad: (ref: any) => void;
  onPlacesChanged: () => void;
}

function LocationSearchBar(props: Props) {
  return (
    <div className="input-group mb-3">
      <StandaloneSearchBox
        onLoad={props.onLoad}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input
          id="location"
          type="text"
          className="form-control"
          placeholder="Location"
          aria-describedby="basic-addon2"
          style={{
            color: "#FFFFFF",
            backgroundColor: "#0B2564",
            borderColor: "#0B2564",
            borderWidth: "2.5px",
            borderRadius: "25px 0px 0px 25px",
            padding: "8px 20px 8px 20px",
            fontFamily: "'League Spartan', sans-serif",
          }}
        />
      </StandaloneSearchBox>
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
      <style>
        {`
          #location::placeholder {
            color: rgba(255, 255, 255, 0.65); /* Custom placeholder color */
          }
        `}
      </style>
    </div>
  );
}

export default LocationSearchBar;
