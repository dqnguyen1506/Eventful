import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Login from "./Login";
import Map from "./Map";

navigator.geolocation.getCurrentPosition(pos => {

  const Container = props => {
    return (<div style={{ width: "98vw", height: "98vh" }}>
      <Map lat={props.pos.coords.latitude} long={props.pos.coords.longitude} />
    </div>)
  }

  ReactDOM.render(
    // API KEY: &key=AIzaSyD7y_nN43cV_7PE6fwtfLcDhC2NW1INcuY
    <Router>
      {/* <Redirect exact from="/" to="/login" /> */}
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" render={(props) => <Container {...props} pos={pos} />} />
      <Route path="/login" component={Login} />
    </Router >,
    document.getElementById("root")
  );
});