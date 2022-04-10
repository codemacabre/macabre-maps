import React from 'react'
import { Icon } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import Layout from './components/Layout'

import 'leaflet/dist/leaflet.css'
import './styles/main.scss'
import graveUrl from './assets/images/grave.svg'

const initialPos = [51.4819, -3.1792]
const cemeteries = [
  {
    name: 'Cathays Cemetery',
    position: [51.5004, -3.1805]
  },
  {
    name: 'Western Cemetery',
    position: [51.4709, -3.2659]
  },
  {
    name: 'Thornhill Cemetery',
    position: [51.53742, -3.20956]
  }
]
const grave = new Icon({
  iconUrl: graveUrl,
  iconSize: [25, 25]
})

const App = () => {
  return (
    <Layout>
      <MapContainer center={initialPos} zoom={11}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${process.env.MAPBOX_USERID}/${process.env.MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAPBOX_API_KEY}`}
          attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
        />
        <Marker icon={grave} position={cemeteries[0].position}>
          <Popup>{cemeteries[0].name}</Popup>
        </Marker>
      </MapContainer>
    </Layout>
  )
}

export default App
