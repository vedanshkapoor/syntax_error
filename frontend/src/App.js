// src/App.js
import React from 'react';
import Home from './screens/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Report from './components/Report';
import Report2 from './screens/Report2';
// import Header from './components/Header';
// import Login from './screens/Login';
// import Signup from './screens/Signup.js';
// import InputForm from './components/InputForm.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/report" element={<Report />} />
           <Route path="/report1" element={<Report2 />} />
          {/* <Route path="/" element={<Header />/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/inputform" element={<InputForm />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
