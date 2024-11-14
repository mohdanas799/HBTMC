import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Anatomy from "./pages/Anatomy";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anatomy" element={<Anatomy />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
