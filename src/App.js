
import Menu from "./Components/Home/Layout/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../src/Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUS/Contact";

function App() {
 
  return (
    <>
    <Router>
          <Menu />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
    
    
      </>
  );
}

export default App;
