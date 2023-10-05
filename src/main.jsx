import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation2 from "../components/Navigation2.jsx";
import HomeP from "../components/HomeP.jsx";
import Correccion from "../components/Correccion.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation2 />
      <Routes>
        <Route path="/">
          <Route index element={<HomeP />} />
        </Route>
        <Route path="/Correccion" element={<Correccion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
