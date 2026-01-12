import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutStory from "./pages/AboutStory";
import AboutHistory from "./pages/AboutHistory";
import MediaGallery from "./pages/MediaGallery";
import MediaSermon from "./pages/MediaSermon";
import Donations from "./pages/Donations";
import Live from "./pages/Live";
import ContactUs from "./pages/ContactUs";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/story" element={<AboutStory />} />
          <Route path="/about/history" element={<AboutHistory />} />
          <Route path="/media/gallery" element={<MediaGallery />} />
          <Route path="/media/sermon" element={<MediaSermon />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/live" element={<Live />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
