import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Routes from "./Routes";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  // palette: {
  //   primary: { main: "#448abd", contrastText: "#FFF" },
  //   secondary: {
  //     main: "#e53935"
  //   }
  // },
  typography: {
    useNextVariants: true,
    fontFamily:
      "montserrat,-apple-system,system-ui,BlinkMacSystemFont," +
      '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
