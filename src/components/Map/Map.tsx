import React, { useRef, useEffect, useState, useMemo } from 'react';
import maplibregl from 'maplibre-gl';
import Map, { NavigationControl } from 'react-map-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.scss';


// type stateProps = {

//   longitude: number,
//   latitude: number,
//   zoom: number

// }

// const mapDetails = useMemo(() => {
//   const initialViewState = {{
//     longitude: 16.62662018,
//     latitude: 49.2125578,
//     zoom: 14
//   }: stateProps
// }
// }, [second])


export default function MyMap() {
  return (
    <div className="Map">
      <div className='Container'>
        <div className="top">
          <h1 className=''>Cities near me</h1>

          <a href="#"> View all 500+ cities </a>
        </div>
        <Map mapLib={maplibregl}
          initialViewState={{
            longitude: 16.62662018,
            latitude: 49.2125578,
            zoom: 14
          }
          }
          style={{ width: "100%", height: "inherit" }}
          mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=WivkTyoULB0isOGRW7EA"
        >
          {/* <NavigationControl position="top-left" /> */}
        </Map>
      </div>
    </div >
  )
}
