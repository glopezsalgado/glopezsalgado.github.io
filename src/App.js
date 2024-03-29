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
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/