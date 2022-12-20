import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import React from 'react';
import './assets/sass/App.sass';
import Index from "./components/index";




function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element= {<Index />} />          
      </Routes>
    </Router>
  );
}

export default App;
