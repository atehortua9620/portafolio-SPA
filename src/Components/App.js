import React from "react";
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import Hi from "../Pages/Hi"
import About from "../Pages/about"
import NotFound from "../Pages/notfound"
import Menu from "./Menu"





function App() {
  return (
    <BrowserRouter>

      <Menu/>
      <Routes>
        <Route path="/" element={<Hi/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
 
}

export default App;
