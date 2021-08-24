import React, { useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import { Button, Modal, List, ListItem } from "@material-ui/core";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import SportsFootballIcon from "@material-ui/icons/SportsFootball";
import CakeIcon from "@material-ui/icons/Cake";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PeopleIcon from "@material-ui/icons/People";
import PetsIcon from "@material-ui/icons/Pets";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import BusinessIcon from "@material-ui/icons/Business";

const categories = {
  business: <BusinessIcon />,
  food: <FastfoodIcon />,
  sports: <SportsFootballIcon />,
  birthday: <CakeIcon />,
  music: <MusicNoteIcon />,
  social: <PeopleIcon />,
  pets: <PetsIcon />,
  gaming: <SportsEsportsIcon />
};

function MarkerWithInfoBox(props) {
  const [isOpen, setOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  
  return (
    <Marker
      key={props.markerKey}
      position={props.position}
      onClick={() => {
        setOpen(true);
      }}
    >
      {isOpen && (
        <InfoWindow
          position={props.position}
          onCloseClick={() => setOpen(false)}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 5
              }}
            >
              {categories[props.category]}
            </div>
            <div style={{ paddingBottom: 3, fontWeight: "bold" }}>
              Event: {props.name}
            </div>
            <div>Owner: {props.owner}</div>
            <div>Date: {props.date.split("T")[0]}</div>
            <div>Time: {props.date.split("T")[1]}</div>
            <div>Description: {props.desc}</div>
            <div style={{ flexDirection: "row" }}>
              <Button disabled>Join</Button>
              <Button onClick={() => setUsersOpen(true)}>Users</Button>
            </div>
            <div></div>
          </div>
        </InfoWindow>
      )}
      {usersOpen && (
        <Modal
          open={usersOpen}
          onClose={() => {
            setUsersOpen(false);
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "98vh",
              fontFamily: "arial"
            }}
          >
            <div
              style={{
                minWidth: 50,
                minHeight: 50,
                backgroundColor: "#FFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                borderRadius: 10,
                fontWeight: "bold"
              }}
            >
              Participating:
              <List style={{ fontWeight: "normal" }}>
                <ListItem divider={true}>Bob Doe</ListItem>
                <ListItem divider={true}>Sally Smith</ListItem>
                <ListItem divider={true}>Jon Harris</ListItem>
                <ListItem divider={true}>Henry Hong</ListItem>
              </List>
            </div>
          </div>
        </Modal>
      )}
    </Marker>
  );
}

export default MarkerWithInfoBox;
