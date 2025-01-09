import React, { useState, useEffect } from "react";
import { GoogleMap } from "@react-google-maps/api";

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Effect to initialize the map and marker when the map is ready
  useEffect(() => {
    if (map) {
      // Create the marker once the map is available
      new google.maps.Marker({
        position: center,
        map: map,
      });
    }
  }, [map, center]); // Re-run whenever the map or center changes

  return (
    <GoogleMap
      mapContainerStyle={{
        height: "95%",
        width: "100%",
        borderRadius: "40px",
        borderColor: "#0B2564",
        borderWidth: "3px",
        borderStyle: "solid",
      }}
      center={center}
      zoom={zoom}
      options={{
        fullscreenControl: false,
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
      }}
      onLoad={(loadedMap) => setMap(loadedMap)}
    />
  );
};

export default Map;
