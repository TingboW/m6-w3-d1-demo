import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BarChart from './bar/src/BarChart';
import Example from './sphere/src/sphere-index';
import App from './tree/src/tree-index'

import "bootstrap/dist/css/bootstrap.min.css";

function MyApp() {
  return (
    <div className="App">
     <h1>My App</h1>
      <Router>
        <div className="container">
        <ul>
          <Link to="/barchart">
            <li>Barchart</li>
          </Link>
          <Link to="/tree">
            <li>Tree</li>
          </Link>
          <Link to="/spheres">
            <li>Spheres</li>
          </Link>
        </ul>
        <Routes>
            <Route path="/barchart" element={<BarChart />} />
            <Route path="/tree" element={<App />} />
            <Route path="/spheres" element={<Example />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}
  
export default MyApp;