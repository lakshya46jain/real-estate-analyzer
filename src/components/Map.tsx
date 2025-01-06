import React, { useState, useEffect, useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });
      setMap(newMap);

      // Creating the AdvancedMarkerElement
      if (newMap) {
        new google.maps.marker.AdvancedMarkerElement({
          position: center,
          map: newMap,
        });
      }
    }
  }, [center, zoom]);

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
