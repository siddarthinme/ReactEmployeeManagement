import "./App.css";
import React from "react";
import SideMenu from "../Components/SideMenu";
import Header from "../Components/Header";
import { CssBaseline, createMuiTheme, makeStyles } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PageHeader from "../Components/PageHeader";
import PeopleIcon from "@mui/icons-material/People";
import Employees from "../Pages/Employees/Employees";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "300px",
    width: "100%",
  },
});

function App() {
  const Classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={Classes.appMain}>
        <Header />
        {/* <PageHeader
          title="Larsen & Toubro Technology Services"
          subTitle="Employee Management"
          icon={<PeopleIcon fontSize="large" />}
        /> */}
        <Employees></Employees>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
