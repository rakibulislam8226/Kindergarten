import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Plan from "./Components/Classworks/Plan/Plan";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Contact } from './Components/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/contact" element={<Contact />} />

          {/* Define other routes here, using the same pattern */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
