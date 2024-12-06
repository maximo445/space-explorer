import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import PicOfDay from "./components/PicOfDay";
import MarsPhotos from "./components/MarsPhotos";

function App() {
  return (
    <Router>
      <div className="p-10">
        <Header />
        <Routes>
          <Route path="/" element={<PicOfDay />} />
          <Route path="/marsphotos" element={<MarsPhotos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
