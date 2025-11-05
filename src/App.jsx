import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AIChat from "./pages/AIChat";
import Ideology from "./pages/Ideology";
import Information from "./pages/Information";

function App() {
  return (
    <div className="App">
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/ideology" element={<Ideology />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
