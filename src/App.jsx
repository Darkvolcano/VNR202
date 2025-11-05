import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AIChat from "./pages/AIChat";
import TuTuong from "./pages/TuTuong";
import Information from "./pages/Information";

function App() {
  return (
    <div className="App">
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/tu-tuong" element={<TuTuong />} />
          <Route path="/thong-tin" element={<Information />} />
        </Routes>
      </main>

      {/* Footer cũng sẽ luôn hiển thị */}
      <Footer />
    </div>
  );
}

export default App;
