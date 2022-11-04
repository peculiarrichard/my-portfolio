import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/Context";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";

const Index = () => {
  return (
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <DataProvider>
        <Index></Index>
      </DataProvider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
