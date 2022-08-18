import React from "react";
import "./App.css";
import { ethers } from "ethers";
import Web3Provider from "./network";
import NarBar from "./NavBar/NavBar";
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {

    background: {
      default: "#666666",
      dark: '#212121',
      paper: "#fff"
    },

    primary: {
      main: "#6200EE",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9e9e9e",
      contrastText: "#212121",
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <Web3Provider
            render={(network) => (
              <div>
                <NarBar />
                <Route exact path="/Alternative-Uniswap-Interface/">
                  <CoinSwapper network={network} />
                </Route>
              </div>
            )}
          ></Web3Provider>
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  );
};

export default App;
