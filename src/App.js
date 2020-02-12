import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Header />
      <Search />

      <div className="content"></div>
      <Footer />
    </>
  );
}

export default App;
