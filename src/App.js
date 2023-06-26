import {BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/signup' element={ <Signup/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/services' element={ <Services/> }/>
          <Route path='/contact' element={ <Contact/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
