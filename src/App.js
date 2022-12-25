import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import React from 'react';
import './assets/sass/App.sass';
import Index from "./components/index";
import Register from "./components/register";




function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element= {<Index />} />  
        <Route exact path="/register.html" element= {<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
