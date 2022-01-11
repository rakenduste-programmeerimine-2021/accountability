import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Account from "./pages/Account"
import Calendar from "./pages/Calendar"
import Video from "./pages/VideoChat"

function App() {
  return (
    <div>
       <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/account" element={<Account/>} />
      <Route exact path="/calendar" element={<Calendar/>} />
      <Route path="/video" element={<Video/>} />
      </Routes>
    </div>
  );
}

export default App;
