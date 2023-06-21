



// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// function Map() {
//   const mapContainerStyle = {
//     width: '50%',
//     height: '100px',
//   };

//   const center = {
//     lat: 52.520008, // Replace with your desired latitude
//     lng: 13.404954, // Replace with your desired longitude
//   };

//   const mapOptions = {
//     mapTypeId: 'hybrid',
//   };


//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDacAp7i8NtOKq6Mlgk-EQsgjdPwRMjMd8">
//       <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10} options={mapOptions}
//       >
//         <Marker position={{ lat: 52.520008, lng: 13.404954 }} />
//       </GoogleMap>
//     </LoadScript>
//   );
// }

// export default Map;
















import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map() {
  const mapContainerStyle = {
    width: '70%',
    height: '200px',
  };

  const center = {
    lat: 52.520008, // Replace with your desired latitude
    lng: 13.404954, // Replace with your desired longitude
  };

  const mapOptions = {
    mapTypeId: 'hybrid',
  };

  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    const markerPosition = {
      lat: 52.520008, // Replace with the marker's latitude
      lng: 13.404954, // Replace with the marker's longitude
    };

    const onLoad = (map) => {
      new window.google.maps.Marker({ position: markerPosition, map, label: 'Berlin' });
    };

    if (window.google && window.google.maps) {
      // Google Maps API already loaded
      setApiLoaded(true);
    } else {
      // Load Google Maps API script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDacAp7i8NtOKq6Mlgk-EQsgjdPwRMjMd8&libraries=places`;
      script.onload = () => setApiLoaded(true);
      document.head.appendChild(script);
    }

    return () => {
      // Clean up any resources if needed
    };
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDacAp7i8NtOKq6Mlgk-EQsgjdPwRMjMd8">
      {apiLoaded && (
        
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12} options={mapOptions}>
          <Marker position={{ lat: 52.520008, lng: 13.404954 }} />
        </GoogleMap>
        
      )}
    </LoadScript>
  );
}

export default Map;












