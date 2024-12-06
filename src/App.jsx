import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PicOfDay from "./components/PicOfDay";
import MarsPhotos from "./components/MarsPhotos";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/marsphotos">Mars</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PicOfDay />} />
          <Route path="/marsphotos" element={<MarsPhotos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
