import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import SplashCursor from "./components/SplashCursor";

import Home from "./page/Home/Home";
import About from "./page/about/About";
import Projects from "./page/Project/Project";
import Contact from "./page/contact/contact";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <SplashCursor />
        <Header />

        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about-my-work" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;