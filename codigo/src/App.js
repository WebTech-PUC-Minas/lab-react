import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/pages/Home"
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Labs from './components/pages/Labs';


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/labs" Component={Labs} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
