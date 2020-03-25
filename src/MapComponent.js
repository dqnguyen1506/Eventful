import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import { render } from 'react-dom';

const mapStyles = {
    width: '100%',
    height: '100%',
  };
  
class MapComponent extends Component{
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
      }
    
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC1tGOt9uH0XObaoIGi8djUckDpjMV2SEY'
  })(MapComponent);
  

