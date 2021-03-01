import {useEffect} from "react";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Experience from "./components/pages/Experience";
import Education from "./components/pages/Education";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import './App.css';



function App() {

  return (
    <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/Resume" component={Resume} />
      <Route exact path="/Experience" component={Experience} />
      <Route exact path="/Education" component={Education} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Contact" component={Contact} />
      <Footer />
    </div>
  </Router>
    );
}

export default App;
