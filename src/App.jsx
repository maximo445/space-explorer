import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import MarsPhotos from "./components/MarsPhotos";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="p-10">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marsphotos" element={<MarsPhotos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
