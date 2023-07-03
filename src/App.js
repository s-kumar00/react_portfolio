import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/header/Header";
import Social from "./components/social/Social";
import Nav from "./components/nav/Nav";
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Service from './pages/service/Service'
import Contact from './pages/contact/Contact'
import './App.css'
import DarkMode from './components/DarkMode/DarkMode'
const App = () => {
  
  return (
    <div>
      <DarkMode />
      <BrowserRouter basename="react_portfolio">
        <Nav />
        <Social />
        <Routes>
          <Route index element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio  />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
