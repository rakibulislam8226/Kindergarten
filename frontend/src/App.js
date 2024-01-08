import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Plan from "./Components/Classworks/Plan/Plan";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />

          {/* Define other routes here, using the same pattern */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
