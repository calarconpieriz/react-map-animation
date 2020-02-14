import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { svgIcon} from './icon'
import mapStyles from './gsa-map-styles'
import countries from './countries'

const position = (country ) => {
  return { lat: country.lat, lng: country.lng }
};

const onLoad = marker => {
  marker.visible = false
  setTimeout(() => {
    marker.visible = true
    marker.setAnimation(google.maps.Animation.DROP)
  }, Math.ceil(Math.random() * 1500))  
}

const icon = ({ color }) => {
  return svgIcon({color})
}

export default function GSAMap() {
  return <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyB-k_yWmpW5lj2c_AHxzagS_7BzGgO7YuQ"
    >
      <GoogleMap
        options={{ styles: mapStyles }}
        id="gsa-map"
        mapContainerStyle={{
          height: "600px",
          width: "1200px"
        }}
        zoom={2}
        center={{
          lat: 51.0899464,
          lng: 5.9689648
        }}
      >
      {countries.map(country => {
        return (<Marker
        onLoad={onLoad}
        position={position(country)}
        icon={icon({color: country.color})} />)
      })}
      </GoogleMap>
    </LoadScript>
     
}