import './App.css';
import './strings.js'
import API from './api';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { useEffect, useState } from 'react';
import Home from './pages/home';

function App() {

  useEffect(()=>{
  },[])

  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
