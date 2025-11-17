import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

export default function MapaPets() {
    const [center, setCenter] = useState<{ lat: number; lng: number } | null>(null);


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
        (pos) =>{
            setCenter({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            });
        },
    () =>{
        setCenter({lat: -23.5505, lng: -46.6333 });
    }
    );
  }, []);

  const containerStyle = {
    width: "100%",
    height: "400px"
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAlp3LdEetGbmHMtCLyxfMfRwMWnKRCuiA">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {/* Marcadores irão aqui depois */}
      </GoogleMap>
    </LoadScript>
  );
}
