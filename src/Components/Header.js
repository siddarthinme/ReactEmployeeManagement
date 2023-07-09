import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Button,
  Grid,
  IconButton,
  InputBase,
  Switch,
  Toolbar,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core";
import { Opacity } from "@mui/icons-material";
import ToggleButton from "@mui/material/ToggleButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FDFDFF",
    transform: "translateZ(0)",
  },
  searchInput: {
    backgroundColor: "white",
    opacity: "0.8",
    padding: "0px 8px",
    "&:hover": {
      backgroundColor: "#F2F2F2",
    },
  },
});

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="default" className={classes.root}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <InputBase
                startAdornment={<SearchIcon fontSize="small" />}
                placeholder="Search"
                className={classes.searchInput}
              ></InputBase>
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsActiveIcon fontSize="small"></NotificationsActiveIcon>
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color="primary">
                  <ChatBubbleIcon fontSize="small"></ChatBubbleIcon>
                </Badge>
              </IconButton>
              <IconButton>
                <Switch />
              </IconButton>
              <IconButton>
                <LogoutIcon></LogoutIcon>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
