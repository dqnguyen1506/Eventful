import React, { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import {
  IconButton,
  Modal,
  Button,
  TextField,
  Select,
  MenuItem,
  Drawer,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import SportsFootballIcon from "@material-ui/icons/SportsFootball";
import CakeIcon from "@material-ui/icons/Cake";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PeopleIcon from "@material-ui/icons/People";
import PetsIcon from "@material-ui/icons/Pets";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import BusinessIcon from "@material-ui/icons/Business";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import ListIcon from "@material-ui/icons/List";
import MarkerWithInfoBox from "./MarkerWithInfoBox";
import CheckIcon from '@material-ui/icons/Check';

const libraries = ["places"];

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateEvent: false,
      createEventName: null,
      createEventDate: "2020-04-01T10:30",
      createEventDesc: null,
      createEventCategory: "social",
      createEventFriends: false,
      searchQuery: "",
      filterToggle: false,
      showDrawer: false,
      currentPosition: { lat: this.props.lat, lng: this.props.long },
      defaultPosition: { lat: this.props.lat, lng: this.props.long },
      markers: [
        {
          name: "Work Lunch",
          position: { lat: 36.83, lng: -119.8 },
          date: "2020-04-01T12:30 PM",
          desc: "Meeting at Danny's for a work lunch.",
          category: "business",
          owner: "Tom Hanks",
          friend: false
        },
        {
          name: "Carl's Birthday",
          position: { lat: 36.86, lng: -119.7 },
          date: "2020-04-30T8:00 PM",
          desc: "Meeting at the bar for Carl's birthday.",
          category: "birthday",
          owner: "Carl Smith",
          friend: true
        },
        {
          name: "Pool Party",
          position: { lat: 36.88918248102311, lng: -119.7685511661621 },
          date: "2020-05-15T12:00 PM",
          desc: "Pool party at Rachels.",
          category: "business",
          owner: "Rachel Carr",
          friend: true
        },
        {
          name: "Farmer's Market",
          position: { lat: 36.8446861286037, lng: -119.82313948403319 },
          date: "2020-05-10T2:30 PM",
          desc: "Farmers marker event.",
          category: "social",
          owner: "Farmer Jon",
          friend: false
        }
      ],
      searchedMarkers: [
        {
          name: "Work Lunch",
          position: { lat: 36.83, lng: -119.8 },
          date: "2020-04-01T12:30 PM",
          desc: "Meeting at Danny's for a work lunch.",
          category: "business",
          owner: "Tom Hanks",
          friend: false
        },
        {
          name: "Carl's Birthday",
          position: { lat: 36.86, lng: -119.7 },
          date: "2020-04-30T8:00 PM",
          desc: "Meeting at the bar for Carl's birthday.",
          category: "birthday",
          owner: "Carl Smith",
          friend: true
        },
        {
          name: "Pool Party",
          position: { lat: 36.88918248102311, lng: -119.7685511661621 },
          date: "2020-05-15T12:00 PM",
          desc: "Pool party at Rachels.",
          category: "business",
          owner: "Rachel Carr",
          friend: true
        },
        {
          name: "Farmer's Market",
          position: { lat: 36.8446861286037, lng: -119.82313948403319 },
          date: "2020-05-10T2:30 PM",
          desc: "Farmers marker event.",
          category: "social",
          owner: "Farmer Jon",
          friend: false
        }
      ]
    };
  }

  // filterMarkers = e => {
  //   var updatedList = this.state.markers;
  //   updatedList = updatedList.filter(marker => {
  //     return marker.name.toLowerCase().search(
  //       e.target.value.toLowerCase()) !== -1;
  //   });

  //   this.setState({ searchedMarkers: updatedList });
  // }

  filterMarkers = e => {
    var updatedList = this.state.markers;
    updatedList = updatedList.filter(marker => {
      return marker.name.toLowerCase().search(
        e.toLowerCase()) !== -1;
    });

    this.setState({ searchedMarkers: updatedList });
  }

  render() {
    return (
      <LoadScript
        libraries={libraries}
        googleMapsApiKey="AIzaSyC1tGOt9uH0XObaoIGi8djUckDpjMV2SEY"
      >
        <GoogleMap
          mapContainerStyle={{
            height: "100%",
            width: "100%"
          }}
          zoom={13}
          center={{ lat: this.props.lat, lng: this.props.long }}
        >
          <Drawer
            open={this.state.showDrawer}
            onClose={() => this.setState({ showDrawer: false })}
          >
            <List>
              {["Friends", "About", "Contact Us"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          {/* <StandaloneSearchBox onPlacesChanged={this.onPlacesChanged} onLoad={this.onLoad}> */}
          <input
            type="text"
            id="searchBar"
            value={this.state.searchQuery}
            placeholder="Search for events..."
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `500px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-250px"
            }}
            onChange={e => { this.filterMarkers(e.target.value); this.setState({ searchQuery: e.target.value }) }}
          />
          <ul style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `500px`,
            height: `auto`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            position: "absolute",
            left: "50%",
            marginLeft: "-250px",
            marginTop: "34px",
            background: "#FFF"
          }}>
            {this.state.searchQuery !== "" ? this.state.searchedMarkers.map((marker, i) => <div style={{ paddingTop: 5, background: "#FFF" }} key={i}>{marker.name}</div>) : null}
          </ul>
          {/* </StandaloneSearchBox> */}
          <ToggleButton
            value="check"
            selected={this.state.filterToggle}
            onChange={() => {
              this.setState({ filterToggle: !this.state.filterToggle });
            }}
            style={{
              backgroundColor: "#FFF",
              width: `30px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              position: "absolute",
              left: "50%",
              marginLeft: "275px"
            }}
          >
            <PermContactCalendarIcon />
          </ToggleButton>
          <div style={{
            backgroundColor: "#FFF",
            // width: `130px`,
            height: `26px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            position: "absolute",
            left: "52%",
            marginLeft: "275px",
            justifyContent: "center",
            alignContent: 'center',
            lineHeight: `26px`,
            fontSize: 14
          }}>{this.state.filterToggle ? "Viewing friends events" : "Viewing all events"}</div>

          {this.state.searchedMarkers.map((marker, i) => {
            if (this.state.filterToggle === true) {
              if (marker.friend === true) {
                return (
                  <MarkerWithInfoBox
                    key={i}
                    markerKey={i}
                    name={marker.name}
                    position={marker.position}
                    date={marker.date}
                    desc={marker.desc}
                    owner={marker.owner}
                    category={marker.category}
                  />
                );
              }
            } else {
              return (
                <MarkerWithInfoBox
                  key={i}
                  markerKey={i}
                  name={marker.name}
                  position={marker.position}
                  date={marker.date}
                  desc={marker.desc}
                  owner={marker.owner}
                  category={marker.category}
                />
              );
            }
          })}

          <Marker
            icon={{ url: require("./marker.svg") }}
            draggable={true}
            position={this.state.currentPosition}
            onDragEnd={e => {
              this.setState({
                currentPosition: { lat: e.latLng.lat(), lng: e.latLng.lng() }
              });
              console.log(this.state.currentPosition)
            }}
          />

          <IconButton
            style={{ position: "absolute", bottom: 20, left: 20 }}
            onClick={() => {
              this.setState({ showCreateEvent: true });
            }}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            style={{ position: "absolute", bottom: 70, left: 20 }}
            onClick={() => {
              this.setState({ showDrawer: true });
            }}
          >
            <ListIcon />
          </IconButton>
          <Modal
            open={this.state.showCreateEvent}
            onClose={() => {
              this.setState({ showCreateEvent: false });
            }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "98vh"
              }}
            >
              <div
                style={{
                  width: 250,
                  minHeight: 150,
                  backgroundColor: "#FFF",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                  borderRadius: 10
                }}
              >
                <TextField
                  label="Name of event"
                  variant="outlined"
                  style={{ paddingBottom: 10 }}
                  fullWidth
                  onChange={e => {
                    this.setState({ createEventName: e.target.value });
                  }}
                />
                <TextField
                  label="Set date and time"
                  type="datetime-local"
                  defaultValue="2020-04-01T10:30"
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={e => {
                    this.setState({ createEventDate: e.target.value });
                  }}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  style={{ marginTop: 10 }}
                  multiline
                  fullWidth
                  onChange={e => {
                    this.setState({ createEventDesc: e.target.value });
                  }}
                />
                <div>Friends only <ToggleButton value="check" selected={this.state.createEventFriends} style={{ padding: 10, marginTop: 5 }} onChange={() => {
                  this.setState({ createEventFriends: !this.state.createEventFriends });
                }}><CheckIcon></CheckIcon></ToggleButton></div>
                <Select
                  onChange={e => {
                    this.setState({ createEventCategory: e.target.value });
                  }}
                  value={this.state.createEventCategory}
                >
                  <MenuItem value={"sports"}>
                    Sports <SportsFootballIcon />
                  </MenuItem>
                  <MenuItem value={"food"}>
                    Food <FastfoodIcon />
                  </MenuItem>
                  <MenuItem value={"birthday"}>
                    Birthday <CakeIcon />
                  </MenuItem>
                  <MenuItem value={"music"}>
                    Music <MusicNoteIcon />
                  </MenuItem>
                  <MenuItem value={"social"}>
                    Social <PeopleIcon />
                  </MenuItem>{" "}
                  <MenuItem value={"pets"}>
                    Pets <PetsIcon />
                  </MenuItem>{" "}
                  <MenuItem value={"gaming"}>
                    Gaming <SportsEsportsIcon />
                  </MenuItem>
                  <MenuItem value={"business"}>
                    Business <BusinessIcon />
                  </MenuItem>
                </Select>
                <Button
                  style={{ marginTop: 5, paddingTop: 10, textAlign: "center" }}
                  onClick={() => {
                    this.setState(prevState => ({
                      markers: [
                        ...prevState.markers,
                        {
                          position: this.state.currentPosition,
                          name: this.state.createEventName,
                          date: this.state.createEventDate,
                          desc: this.state.createEventDesc,
                          owner: "Henry Hong",
                          category: this.state.createEventCategory,
                          friend: this.state.createEventFriends
                        }
                      ],
                      searchedMarkers: [
                        ...prevState.markers,
                        {
                          position: this.state.currentPosition,
                          name: this.state.createEventName,
                          date: this.state.createEventDate,
                          desc: this.state.createEventDesc,
                          owner: "Henry Hong",
                          category: this.state.createEventCategory,
                          friend: this.state.createEventFriends
                        }
                      ]
                    }));
                    this.setState({
                      currentPosition: this.state.defaultPosition,
                      showCreateEvent: false
                    });
                  }}
                >
                  Create Event
                </Button>
              </div>
            </div>
          </Modal>
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default Map;
