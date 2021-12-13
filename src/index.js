import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import {BrowserRouter} from "react-router-dom";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <App />
      </MoralisProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
