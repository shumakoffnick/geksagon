import HomePages from "pages/HomePages";
import LoginPages from "pages/LoginPages";
import RegisterPages from "pages/RegisterPages";
import React from "react";

import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <div className="app">
    <Routes>
      <Route path="/" element={<HomePages/>} />
      <Route path="/register" element={<RegisterPages/>} />
      <Route path="/login" element={<LoginPages/>} />
    </Routes>
    </div>
    </>
  )
}

export default App;
