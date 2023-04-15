import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Greetings from './components/Greetings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </Router>
  );
}

export default App;
