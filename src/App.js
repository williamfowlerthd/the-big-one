import React, { useState } from "react";
import "./index.css";
import Videos from "./components/Videos";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import TemporaryDrawer from "./components/TemporaryDrawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  GoogleCircleFilled,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";

firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const App = () => {
  const [appUser, setUser] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  console.log("appUser: ", appUser);

  if (isLoggedIn) {
    return (
      <div style={{ height: "100%" }}>
        <header>
          <AppBar
            position="static"
            style={{
              background: "linear-gradient(55deg, #006aff 50%, #00e6ff 80%)",
            }}
          >
            <Toolbar
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                background: "linear-gradient(55deg, #006aff 50%, #00e6ff 80%)",
              }}
            >
              <TemporaryDrawer />
              <Typography
                variant="h3"
                style={{
                  fontFamily:
                    "Luminari, Impact, Trattatello, Chalkduster,  fantasy",
                  color: "cdcdcd",
                }}
              >
                Hello, {appUser}
              </Typography>
              <Button
                style={{
                  backgroundColor: "#1b2845",
                  backgroundImage:
                    "linear-gradient(315deg, #1b2845 0%, #274060 74%)",
                  border: 0,
                  borderRadius: 3,
                  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
                  height: 42,
                  padding: "0 15px",
                  fontWeight: "bold",
                }}
                color="primary"
                variant="contained"
                onClick={() =>
                  firebase
                    .auth()
                    .signOut()
                    .then(function () {
                      setUser("");
                      setLoggedIn(false);
                    })
                    .catch(function (error) {
                      console.log("error: ", error);
                    })
                }
              >
                Sign Out
              </Button>
            </Toolbar>
          </AppBar>
        </header>
        <Videos></Videos>
      </div>
    );
  }
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "space-evenly",
      }}
    >
      <AppBar
        position="static"
        style={{
          display: "flex",
          flexDirection: "row",
          background: "linear-gradient(55deg, #006aff 50%, #00e6ff 80%)",
        }}
      >
        <Toolbar
          style={{
            width: "100%",
            justifyContent: "space-between",
            background: "linear-gradient(55deg, #006aff 50%, #00e6ff 80%)",
          }}
        >
          <TemporaryDrawer style={{ justifyContent: "flex-start" }} />
          <Typography
            variant="h3"
            style={{
              fontFamily:
                "Luminari, Impact, Trattatello, Chalkduster,  fantasy",
              color: "white",
            }}
          >
            The Big 1
          </Typography>
        </Toolbar>
      </AppBar>
      <Button
        style={{
          background: "linear-gradient(55deg, #006aff 50%, #00e6ff 80%)",
          border: 0,
          borderRadius: 5,
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
          height: "auto",
          width: "40%",
          padding: 15,
          fontWeight: "bold",
          marginTop: "15%",
        }}
        color="primary"
        variant="contained"
        onClick={() => {
          firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then((result) => {
              setLoggedIn(true);
              setUser(result.user.displayName);
              console.log("result: ", result);
            })
            .catch(function (error) {
              var errorMessage = error.message;
              var email = error.email;
              var credential = error.credential;
              console.log(errorMessage, ":", email, ":", credential);
            });
        }}
      >
        <GoogleCircleFilled
          style={{
            fontSize: "32px",
            margin: "0 5px 0 0",
          }}
        />
        Sign In with Google
      </Button>
      <Button
        style={{
          background: "linear-gradient(55deg, #006aff 50%, #00e6ff 80%)",
          border: 0,
          borderRadius: 5,
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
          height: "auto",
          width: "40%",
          padding: 15,
          fontWeight: "bold",
          marginTop: 60,
        }}
        color="primary"
        variant="contained"
        onClick={() => {
          firebase
            .auth()
            .signInWithPopup(facebookAuthProvider)
            .then((result) => {
              console.log("FB Result: ", result.user.displayName);
              setUser(result.user.displayName);
              setLoggedIn(true);
              console.log(setUser, appUser);
            })
            .catch(function (error) {
              var errorMessage = error.message;
              console.log(errorMessage);
              var email = error.email;
              var credential = error.credential;
              console.log(email, ":", credential);
            });
        }}
      >
        <FacebookFilled
          style={{
            fontSize: "32px",
            margin: "0 5px 0 0",
          }}
        />
        Sign In with Facebook
      </Button>
      <Button
        style={{
          background: "linear-gradient(55deg, #006aff 50%, #00e6ff 80%)",
          border: 0,
          borderRadius: 5,
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
          height: "auto",
          width: "40%",
          padding: 15,
          fontWeight: "bold",
          marginTop: 60,
        }}
        color="primary"
        variant="contained"
        onClick={() => {
          firebase
            .auth()
            .signInWithPopup(twitterAuthProvider)
            .then((result) => {
              setUser(result.user.displayName);
              setLoggedIn(true);
              console.log("twitterAuthProvider: ", result);
              console.log("appUser: ", appUser);
            })
            .catch(function (error) {
              var errorMessage = error.message;
              console.log(errorMessage);
              var email = error.email;
              var credential = error.credential;
              console.log(email, ":", credential);
            });
        }}
      >
        <TwitterOutlined
          style={{
            fontSize: "32px",
            margin: "0 5px 0 0",
          }}
        />
        Sign In with Twitter
      </Button>
    </div>
  );
};
export default App;
