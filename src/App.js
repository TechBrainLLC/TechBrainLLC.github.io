
import React from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
  
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/about' component={About} />
      </Routes>
    </Router>
  );
}
  
export default App