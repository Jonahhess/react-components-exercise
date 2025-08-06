import Spam from "./Spam.jsx";
import React, { Component } from "react";

const Spamalot = () => {
  return [...Array(500)].map((e, i) => <Spam key={i}></Spam>);
};

export default Spamalot;
