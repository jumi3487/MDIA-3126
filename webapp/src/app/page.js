"use client"

// import styles from "./page.module.css";
// import Link from 'next/link'

import {APIProvider, Map, Marker, useMarkerRef} from '@vis.gl/react-google-maps';
import { useEffect } from 'react';

export default function Home() {

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [markerRef, marker] = useMarkerRef();

  useEffect(() => {
    if(!marker){
      return;
    }
  }, [marker]);

  return (
    <APIProvider apiKey={API_KEY}>
    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 49.24897949502783, lng: -123.00188479121562}}
      defaultZoom={17}
    >
      <Marker ref={markerRef} position={{lat: 49.24897949502783, lng: -123.00188479121562}} />
      </Map>
  </APIProvider>
  );
}