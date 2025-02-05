import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/taskstwo/Home";
import Detail from "./component/taskstwo/Detail";
import Card from "./component/taskstwo/Card";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Card />} />
      </Routes>
    </Router>
  );
};

export default App;
