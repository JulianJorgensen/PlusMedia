import React from 'react';
let {connect} = require('react-redux');
import GoogleMapReact from 'google-map-react';
import Loader from 'components/Loader';
import styles from './index.css';

const Marker = () => <div className={styles.marker}><i className="fa fa-map-marker" /> PlusMedia LLC</div>;

export default class Map extends React.Component {
  static defaultProps = {
    center: {lat: 41.3937627, lng: -73.5139165},
    zoom: 16
  };

  render(){
    return (
      <div className={styles.map}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={41.394354}
            lng={-73.514995}
          />
        </GoogleMapReact>
      </div>
    )
  }
}
