import React from "react";
import './App.css';
import Home from "./Home";
import Support from "./Support";
import {Route, Routes} from "react-router-dom";
import Download from "./Download";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/CentrEd" element={<Home /> } />
      <Route path="/CentrEd/Support" element={<Support /> } />
      <Route path="/CentrEd/Download" element={<Download /> } />
    </Routes>
    </div>
  );
}

export default App;
