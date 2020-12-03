import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';


import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import AddItems from './components/AddItems';
import ItemsList from './components/ItemsList';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      {/* <div> */}
        <Navbar />
        <Route path = "/homepage" component = { Homepage } />
        <Route path = "/addItems" component = { AddItems } />
        <Route path = "/ItemsList" exact component = { ItemsList } />
        <Route path = "/addUser"  component = { Signup } />
        <Route path = "/login" component = { Login } />
      <Footer/>
      {/* </div> */}
    </Router>
  );
}

export default App;
