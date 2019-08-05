import Taro, { Component, useState, useEffect } from "@tarojs/taro";
import { View, Map } from "@tarojs/components";

import "./index.scss";
import map_marker from "../../../assets/images/uu_marker.png";

const dummyMarkers = [
  {
    iconPath: map_marker,
    id: 0,
    latitude: 0,
    longitude: 0,
    width: 20,
    height: 20
  }
];
const polyline = [
  {
    points: [
      {
        longitude: 113.3245211,
        latitude: 23.10229
      },
      {
        longitude: 188.32452,
        latitude: 48.21229
      }
    ],
    color: "black",
    width: 20,
    dottedLine: true
  }
];
const controls = [
  {
    id: 1,
    iconPath: map_marker,
    position: {
      left: 0,
      top: 300 - 50,
      width: 50,
      height: 50
    },
    clickable: true
  }
];
function UUMap(props) {
  const { marker, setMarker } = useState({ dummyMarkers });
  useEffect(() => {
    const asyncLoc = Taro.getLocation({ type: "gcj02" })
      .then(function(res) {
        const latitude = res.latitude,
          longtitude = res.longitude;
        console.log(marker);
        const updatedMarker = dummyMarkers.map(item => {
          item.latitude = latitude;
          item.longitude = longtitude;
          return item;
        });
        setMarker(updatedMarker);
      })
      .catch(function(e) {
        console.log(e);
      });
    return () => {
      asyncLoc;
    };
  }, []);
  const regionchange = e => {
      console.log(e.type);
    },
    markertap = e => {
      console.log(e);
    },
    controltap = e => {
      console.log(e.controlId);
    },
    onTap = e => {
      console.log(e);
    };
  return (
    <Map
      className='test_uu_map'
      markers={marker}
      controls={controls}
      polyline={polyline}
      onRegionChange={regionchange}
      onMarkerTap={markertap}
      onControlTap={controltap}
      onTap={onTap}
    />
  );
}

export default UUMap;
