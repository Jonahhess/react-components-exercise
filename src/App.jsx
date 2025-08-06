import React from "react";
import "./App.css";
import Dummy from "./components/Dummy.jsx";
import Spamalot from "./components/Spamalot.jsx";
import NavBar from "./components/NavBar.jsx";
import Checkout from "./components/Checkout.jsx";
import Menu from "./components/Menu.jsx";

export default function App() {
  return (
    <div className="app">
      <div className="ex-space">
        <h4 className="ex-title">Exercise 1</h4>
        <div className="exercise" id="ex-1">
          <Dummy></Dummy>
        </div>
      </div>

      <div className="ex-space">
        <h4 className="ex-title">Exercise 2</h4>
        <div className="exercise" id="ex-2">
          <Spamalot></Spamalot>
        </div>

        <div className="exercise" id="ex-4">
          <NavBar />
          <Menu />
          <Checkout />
        </div>
      </div>
    </div>
  );
}
