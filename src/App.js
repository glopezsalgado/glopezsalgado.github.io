//import logo from './logo.svg';
import './App.css';
import './MyCommunities.css';
import './TechnicalExperience.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";

import { TechnicalExperience } from "./components/TechnicalExperience";


import { Footer } from "./components/Footer";
import { MyCommunities } from './components/MyCommunities';
import { LetsConnect } from "./components/LetsConnect";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MyCommunities />
      <Footer />
    </div>
  );
}

export default App;
*/
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/technicalExperience" element={<TechnicalExperience />} />
            <Route path="/myCommunities" element={<MyCommunities />} />
            <Route path="/connect" element={<LetsConnect />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;