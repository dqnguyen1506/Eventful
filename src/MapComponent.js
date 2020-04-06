import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import {usePosition} from './usePosition';
import { geolocated, geoPropTypes } from "react-geolocated";
import ReactDOM from 'react-dom';

const mapStyles = {
    width: '100%',
    height: '100%',
  };
 
//const {latitude, longitude, error} = usePosition();

class MapComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            Lat : null,
            Lng : null
        };
    }

    render() {
        return (
            <Map
              google={this.props.google}
              zoom={12}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
      }
    
}
// Using ES6 object spread syntax
MapComponent.propTypes = { ...MapComponent.propTypes, ...geoPropTypes };
const MainWithGeoloc = geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(MapComponent);
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC1tGOt9uH0XObaoIGi8djUckDpjMV2SEY'
  })(MapComponent);
  
ReactDOM.render(<MainWithGeoloc />, document.getElementById('root'));

