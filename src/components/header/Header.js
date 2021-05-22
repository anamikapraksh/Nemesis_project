// import React from "react";
// import "./Header.css";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import jwt_decode from "jwt-decode";
import Countdown from "react-countdown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    // position: screenLeft,
    // marginRight: theme.spacing(2),
    alignContent: "left",
  },
  outer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Head() {
  const classes = useStyles();
  let udetails = JSON.parse(localStorage.getItem("User_details"));
  if (udetails) {
    var decoded = jwt_decode(udetails.token);
  }
  function Clr() {
    localStorage.removeItem("User_details");
    localStorage.setItem("AUTH", false);
    window.location.href = "/";
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar className={classes.outer}>
          <div>
            <Typography variant="h5" className={classes.title}>
              NEMESIS
            </Typography>
          </div>
          {udetails && (
            <div className={classes.timer}>
              Session ends in :{" "}
              {
                <Countdown
                  date={decoded.exp * 1000}
                  onComplete={Clr}
                  controlled={false}
                  // onTick={(e) => FTSeconds(e)}
                />
              }
            </div>
          )}
          <div>
            {!udetails && (
              <Button color="inherit" href="/">
                Login
              </Button>
            )}
            {!udetails && (
              <Button color="inherit" href="/signup">
                SignUp
              </Button>
            )}
            {udetails && (
              <Button color="inherit" onClick={Clr} href="/">
                Logout
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// export default function Head(){
// return(
//     <div>
//         hi
//     </div>
// );
// }
