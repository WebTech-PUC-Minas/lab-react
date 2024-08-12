import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/pages/Home"
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
