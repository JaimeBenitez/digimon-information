import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import './assets/sass/App.sass';
import Index from "./components/index";
import Register from "./components/register";
import Login from "./components/login";
import Contact from "./components/contact";
import Suggestions from "./components/suggestions";
import User from "./components/user";




function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element= {<Index />} />  
        <Route exact path="/register.html" element= {<Register />} />
        <Route exact path="/login.html" element= {<Login />} />
        <Route exact path="/contact.html" element= {<Contact />} />
        <Route exact path="/suggestions.html" element= {<Suggestions />} />
        <Route exact path="/user.html" element= {<User />} />
      </Routes>
    </Router>
  );
}

export default App;
