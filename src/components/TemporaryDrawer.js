import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CameraAlt from "@material-ui/icons/CameraAlt";
import LiveTv from "@material-ui/icons/LiveTv";
import VideoCall from "@material-ui/icons/VideoCall";
import Email from "@material-ui/icons/Email";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "left",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {["Gallery", "Videos", "WebCam", "Contact Us"].map((text, index) => ( */}
        <ListItem>
          <ListItemIcon>
            <CameraAlt />
          </ListItemIcon>
          Gallery
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LiveTv />
          </ListItemIcon>
          Videos
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <VideoCall />
          </ListItemIcon>
          WebCam
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          Contact Us
        </ListItem>
        {/* ))} */}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{
              backgroundColor: "#1b2845",
              backgroundImage:
                "linear-gradient(315deg, #1b2845 0%, #274060 74%)",
              border: 0,
              borderRadius: 3,
              boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
              height: 42,
              padding: "0 10px",
              fontWeight: "bold",
            }}
            variant="contained"
            color="primary"
            edge="start"
            aria-label="left"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon fontSize="large" />
          </Button>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
