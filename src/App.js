//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
//import { Skills } from "./components/Skills";
//import { Projects } from "./components/Projects";
//import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MyCommunities } from './components/MyCommunities';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/my-communities" element={<MyCommunities />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;